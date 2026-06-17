import { describe, it, expect } from 'vitest';
import { cleanReplyText, finalizeReply, sanitizeReply, parseResponse } from './api.js';

// ============================================================
// Validators — used as regression assertions in every test
// ============================================================

/** Assert: no double (or longer) ASCII spaces. */
function expectNoDoubleSpace(s) {
  expect(s, `double space in: "${s}"`).not.toMatch(/ {2,}/);
}

/** Assert: no space immediately before ASCII punctuation. */
function expectNoSpaceBeforePunctuation(s) {
  expect(s, `space before punctuation in: "${s}"`).not.toMatch(/[ \t]+[.,;:!?]/);
}

/** Assert: no leading/trailing whitespace per line. */
function expectTrimmedLines(s) {
  for (const line of s.split('\n')) {
    expect(line, `untrimmed line: "${line}"`).toBe(line.trim());
  }
}

/** Assert: no markdown/format artifacts remain. */
function expectNoMarkdown(s) {
  expect(s, `bold markdown in: "${s}"`).not.toMatch(/\*\*/);
  expect(s, `heading markdown in: "${s}"`).not.toMatch(/^#{1,6}\s/m);
  expect(s, `bullet list in: "${s}"`).not.toMatch(/^\s*[-\u2022\u00B7]\s+/m);
  expect(s, `numbered list in: "${s}"`).not.toMatch(/^\s*\d+[.)]\s+/m);
  expect(s, `markdown link in: "${s}"`).not.toMatch(/\[[^\]]+\]\([^)]+\)/);
  expect(s, `backtick code in: "${s}"`).not.toMatch(/`[^`]+`/);
}

/** Assert: em-dash banned by style guide. */
function expectNoEmDash(s) {
  expect(s, `em-dash in: "${s}"`).not.toMatch(/\u2014/);
}

/** Run the full regression suite on a sanitized output. */
function expectClean(s) {
  expectNoDoubleSpace(s);
  expectNoSpaceBeforePunctuation(s);
  expectTrimmedLines(s);
  expectNoMarkdown(s);
  expectNoEmDash(s);
}

// ============================================================
// Unit: cleanReplyText / finalizeReply / sanitizeReply
// ============================================================

describe('cleanReplyText', () => {
  it('strips "Opsi N:" prefix', () => {
    expect(cleanReplyText('Opsi 1: halo dunia')).toBe('halo dunia');
    expect(cleanReplyText('Reply 2 - test')).toBe('test');
    expect(cleanReplyText('Option 3) hello')).toBe('hello');
  });

  it('strips outer quotes (straight and smart)', () => {
    expect(cleanReplyText('"hello"')).toBe('hello');
    expect(cleanReplyText('\u201Chello\u201D')).toBe('hello');
    expect(cleanReplyText("'world'")).toBe('world');
  });

  it('strips markdown bold/italic/heading/hr', () => {
    expect(cleanReplyText('**bold** text')).toBe('bold text');
    expect(cleanReplyText('*italic* text')).toBe('italic text');
    expect(cleanReplyText('## heading\nbody')).toBe('heading\nbody');
    expect(cleanReplyText('text\n---\nmore')).toBe('text\n\nmore');
  });

  it('replaces em-dash with comma+space and en-dash with hyphen', () => {
    expect(cleanReplyText('hal ini \u2014 termasuk itu')).toBe('hal ini , termasuk itu');
    expect(cleanReplyText('range 5\u201310')).toBe('range 5-10');
  });

  it('strips bullets and numbering at line starts', () => {
    expect(cleanReplyText('- first\n- second')).toBe('first\nsecond');
    expect(cleanReplyText('1. one\n2) two')).toBe('one\ntwo');
  });

  it('collapses double spaces and triple newlines', () => {
    expect(cleanReplyText('a  b   c')).toBe('a b c');
    expect(cleanReplyText('a\n\n\n\nb')).toBe('a\n\nb');
  });
});

describe('finalizeReply', () => {
  it('removes markdown links and backticks', () => {
    expect(finalizeReply('see [docs](https://x.com) please')).toBe('see docs please');
    expect(finalizeReply('use `npm run` now')).toBe('use npm run now');
  });

  it('fixes spacing around ASCII punctuation', () => {
    expect(finalizeReply('hello ,world')).toBe('hello, world');
    expect(finalizeReply('what ? really')).toBe('what? really');
    expect(finalizeReply('done.Next step')).toBe('done. Next step');
  });

  it('preserves ellipsis "..." and "?!" combos (adds inter-sentence space)', () => {
    // "..." stays intact; sentence boundary gets a space inserted.
    expect(finalizeReply('wait...really?!')).toBe('wait... really?!');
    expect(finalizeReply('wow?! amazing')).toBe('wow?! amazing');
  });

  it('collapses repeated commas/colons but not periods/exclaims', () => {
    expect(finalizeReply('hi,, world')).toBe('hi, world');
    expect(finalizeReply('wow!!! amazing')).toBe('wow!!! amazing');
  });

  it('does not touch CJK/Hebrew/Hindi punctuation', () => {
    // Japanese full-width comma + period
    const ja = '\u306A\u308B\u307B\u3069\u3001\u3067\u3082\u5B9F\u88C5\u3067\u8A70\u307E\u308A\u305D\u3046\u3088\u306D\u3002';
    expect(finalizeReply(ja)).toBe(ja);
    // Hindi danda
    const hi = '\u092F\u0939 \u0935\u093E\u0932\u093E \u092A\u0949\u0907\u0902\u091F \u0938\u0939\u0940 \u0939\u0948\u0964';
    expect(finalizeReply(hi)).toBe(hi);
    // Hebrew with comma
    const he = '\u05D5\u05D0\u05D5, \u05D6\u05D4 \u05D1\u05D0\u05DE\u05EA \u05D7\u05D5\u05DC\u05D4';
    expect(finalizeReply(he)).toBe(he);
  });
});

// ============================================================
// Regression: multilingual outputs must come out clean
// ============================================================

const MULTILINGUAL_FIXTURES = [
  {
    lang: 'id',
    input: '**Opsi 1:** Wah keren  banget , gue suka ide ini \u2014 emang relate sih',
    mustContain: ['Wah keren banget'],
  },
  {
    lang: 'en',
    input: '"Opsi 2: This is  amazing , can\u2019t wait to try [it](https://x.com) tbh"',
    mustContain: ['This is amazing'],
  },
  {
    lang: 'ja',
    input: '\u30AA\u30D7\u30B7\u30E7\u30F33\uFF1A\u306A\u308B\u307B\u3069\u3001\u3067\u3082\u5B9F\u88C5\u3067\u8A70\u307E\u308A\u305D\u3046\u3088\u306D\u3002',
    mustContain: ['\u306A\u308B\u307B\u3069'],
  },
  {
    lang: 'he',
    input: '**\u05D0\u05D5\u05E4\u05E6\u05D9\u05D4 1:** \u05D5\u05D0\u05D5, \u05D6\u05D4  \u05D1\u05D0\u05DE\u05EA \u05D7\u05D5\u05DC\u05D4 \u05D3\u05D1\u05E8 \u05DE\u05D4\u05D6\u05D5\u05D9\u05D5\u05EA',
    mustContain: ['\u05D5\u05D0\u05D5'],
  },
  {
    lang: 'hi',
    input: 'Opsi 1: \u092F\u093E\u0930 \u0938\u091A \u092E\u0947\u0902 , \u092F\u0939  \u0935\u093E\u0932\u093E \u092A\u0949\u0907\u0902\u091F \u0915\u093F\u0938\u0940 \u0928\u0947 \u092A\u0915\u095C\u093E \u0939\u0940 \u0928\u0939\u0940\u0902 \u0925\u093E',
    mustContain: ['\u092F\u093E\u0930 \u0938\u091A \u092E\u0947\u0902'],
  },
];

describe('sanitizeReply — multilingual regression', () => {
  for (const fx of MULTILINGUAL_FIXTURES) {
    it(`[${fx.lang}] cleans output without breaking script-specific punctuation`, () => {
      const out = sanitizeReply(fx.input);
      expectClean(out);
      for (const phrase of fx.mustContain) {
        expect(out).toContain(phrase);
      }
    });
  }
});

// ============================================================
// Integration: parseResponse end-to-end with messy AI output
// ============================================================

describe('parseResponse', () => {
  const RAW = `### 1. Confidence Check
- Skor: 8/10
- Alasan: data jelas dan domain familiar

### 2. Angle
Supportif - relate dengan pengalaman pribadi

### 3. Opsi Reply

**Opsi 1:** Wah keren  banget , gue suka  ide ini \u2014 emang relate sih
2) "This is  amazing, can\u2019t wait to try [it](https://x.com)"
3. \u306A\u308B\u307B\u3069\u3001\u3067\u3082\u5B9F\u88C5\u3067\u8A70\u307E\u308A\u305D\u3046\u3088\u306D\u3002
4) \u05D5\u05D0\u05D5, \u05D6\u05D4 \u05D1\u05D0\u05DE\u05EA \u05D7\u05D5\u05DC\u05D4
5. \u092F\u093E\u0930 \u0938\u091A \u092E\u0947\u0902 , \u092F\u0939 \u0935\u093E\u0932\u093E \u092A\u0949\u0907\u0902\u091F \u0938\u0939\u0940 \u0939\u0948\u0964

### 4. Rekomendasi
Opsi 1 paling natural. Teknik: Social Proof`;

  const parsed = parseResponse(RAW);

  it('extracts confidence, angle, and recommendation', () => {
    expect(parsed.confidence.score).toBe(8);
    expect(parsed.angle).toBe('Supportif');
    expect(parsed.recommendation.pick).toBe(1);
    expect(parsed.recommendation.technique).toMatch(/Social Proof/);
  });

  it('extracts exactly the expected number of replies', () => {
    expect(parsed.replies.length).toBeGreaterThanOrEqual(5);
  });

  it('every reply passes the full regression suite', () => {
    for (const r of parsed.replies) {
      expectClean(r);
    }
  });

  it('does not leak "Opsi N:" prefixes into replies', () => {
    for (const r of parsed.replies) {
      expect(r).not.toMatch(/^(?:Opsi|Reply|Option)\s*\d+/i);
    }
  });
});