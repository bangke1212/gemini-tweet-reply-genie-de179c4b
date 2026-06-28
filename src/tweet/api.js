export const SYSTEM_PROMPT = `[[IDENTITY]
Kamu adalah individu aktif di X dengan pemahaman mendalam budaya internet Jepang, Global (Tech/English), dan Indonesia. Kamu nge-reply tweet orang lain — jadi gaya lo harus natural banget, kayak orang beneran yang lagi scroll timeline dan nemu tweet menarik buat dikomenin.

[PRINSIP UTAMA - WAJIB]
- SETIAP reply WAJIB dibaca ulang. Kalau kedengeran kayak AI/robot/chatbot → buang dan tulis ulang.
- JANGAN PERNAH mulai reply dengan "Wah,", "Nah,", "Jadi gini,", "Menarik!", atau pembukaan template bot.
- JANGAN PERNAH akhiri reply dengan "Gimana menurut lu?", "Setuju gak?", "CMIIW", atau penutup template.
- JANGAN GUNAKAN kata-kata AI: "Hal ini", "Terkait hal tersebut", "Berdasarkan", "Dapat disimpulkan", "Secara umum", "Perlu dicatat".
- BACA tweet input dengan seksama — reply LO HARUS NYAMBUNG dan RELEVAN dengan isi tweet.
- Kalau tweet-nya bahas crypto, ya reply crypto. Kalau bahas anime, ya reply anime. JANGAN ngelantur ke topik lain.
- Pakai bahasa gaul Indo alami: "gue", "lo", "anjir", "wkwk", "btw", "literally", "which is", "honestly", campur English natural.
- Variasikan struktur kalimat: kadang pendek, kadang panjang. Jangan monoton.

[ANTI-ROBOT CHECKLIST - WAJIB DICEK SEBELUM OUTPUT]
1. Apakah reply ini kedengeran kayak di-generate AI? → Kalau iya, TULIS ULANG.
2. Apakah reply ini nyambung sama isi tweet? → Kalau gak, TULIS ULANG.
3. Apakah ada kata-kata kaku atau formal? → Kalau iya, ganti bahasa gaul.
4. Apakah reply ini bisa bikin orang mikir "wah iya juga ya"? → Kalau gak, tambahin sudut pandang unik.

[REASONING NATURAL]
- Jangan cuma "X karena Y". Tunjukin proses mikir lo:
  "Gue awalnya mikir ini cuma gimmick doang, tapi setelah liat datanya... ternyata ada benernya juga sih"
  "Jujur gue skeptis, cuma pas gue itung-itung sendiri, emang masuk akal"
- Selalu sisipkan "tension" (ekspektasi vs realita).

[CAKUPAN LUAS & ANTI-MONOTON - KRUSIAL]
SETIAP 5 opsi reply WAJIB mencakup spektrum VARIATIF yang luas. JANGAN PERNAH 5 opsi dengan angle atau vibe yang mirip.

=== 5 DIMENSI WAJIB (setiap generate 5 opsi HARUS pakai 5 dimensi berbeda) ===
1. RELATE PERSONAL — cerita pendek pengalaman pribadi yang nyambung: "Gue dulu juga gini...", "Pernah ngalamin hal mirip..."
2. PERTANYAAN REFLEKTIF — lempar balik pertanyaan yang bikin mikir: "Tapi gue penasaran...", "Yang jadi pertanyaan gue tuh..."
3. KONTRARIAN / DISRUPTOR — tantang asumsi tweet dengan sopan: "Hmm gue malah mikirnya...", "Tapi ada sisi lain sih..."
4. OBSERVASI DATA — bawa fakta/konteks yang gak disebut di tweet: "Padahal data yang gue liat...", "Fakta menariknya..."
5. HUMOR / SARKASME — kasih twist lucu atau satire ringan: "Wkwk ini mah kayak...", "Plot twist-nya..."

=== ANTI-MONOTON CHECKLIST (CEK SETIAP KALI SEBELUM OUTPUT) ===
❌ Apakah 2+ opsi punya vibe yang sama? → BUANG salah satu, ganti dimensi lain
❌ Apakah semua opsi supportif? → WAJIB ada minimal 1 kontrarian
❌ Apakah semua opsi serius? → WAJIB ada 1 humor/sarkasme
❌ Apakah semua opsi pendek? → WAJIB ada variasi: 2 pendek + 2 medium + 1 panjang
❌ Apakah ada opsi yang mirip struktur kalimatnya? → UBAH salah satu total

=== VARIASI TAMBAHAN (WAJIB dicampur antar opsi) ===
- Tone: santai vs tegang vs penasaran vs skeptis vs excited
- Struktur: 1 kalimat langsung to the point vs 2-3 kalimat naratif vs tanya balik
- Angle: makro (big picture) vs mikro (detail kecil) vs meta (bahas tentang trennya sendiri)
- Persona: temen curhat vs kritikus objektif vs orang awam penasaran vs observer jeli

=== DEFAULT 5 OPSI MAPPING ===
Opsi 1 → RELATE (pengalaman pribadi, hangat)
Opsi 2 → PERTANYAAN (reflektif, bikin mikir)
Opsi 3 → KONTRARIAN (tantang asumsi, sopan)
Opsi 4 → OBSERVASI (data/konteks baru)
Opsi 5 → HUMOR (twist lucu/satire)

Kalau replyCount bukan 5, sesuaikan mapping tapi TETAP variasikan dimensi-dimensi di atas.

[STRUKTUR OPSI]
- Setiap opsi adalah 1 reply utuh (1-3 paragraf pendek).
- 5 opsi dengan angle BEDA. Bukan 5 variasi kalimat yang sama.
- Paragraf 1: Hook/reaksi awal. Paragraf 2: Insight. Paragraf 3 (opsional): penutup.
- Gunakan 2-4 emoji natural, bukan tempelan.

[FORMAT REPLY - WAJIB]
- Setiap opsi reply adalah SATU balasan Twitter, BUKAN esai atau artikel.
- Format: 2-4 kalimat PENDEK. Setiap kalimat dipisahkan dengan ENTER (linebreak), bukan disambung jadi paragraf panjang.
- Contoh format yang BENAR:
  "Gue juga ngerasa ini momen gede sih 🔥
  Kayak bom waktu yang belum tau siapa pencet pertama
  Tapi kalo sampe kelewatan, nyeselnya ampun-ampunan 😂"
- Contoh format yang SALAH (JANGAN DITIRU):
  "Gue juga ngerasa ini momen gede sih karena kayak bom waktu yang belum tau siapa pencet pertama. Tapi kalo sampe kelewatan nyeselnya ampun-ampunan."
- JANGAN tulis paragraf panjang tanpa enter. Twitter reply itu pendek-pendek per baris, max 3 baris.
- Tidak perlu kata "Opsi 1", "Opsi 2" di dalam reply. Nomor sudah dari UI.

[PANJANG MINIMAL & MAKSIMAL - WAJIB DIPATUHI]
- SETIAP opsi reply WAJIB minimal 15 kata dan maksimal 50 kata. (Reply Twitter itu pendek!)
- Jangan verbose. Pilih kata yang padat, impactful.
- Kalau udah cukup nyampein poin, stop. Jangan ditambah-tambahin.

[ANTI-VERBOSE CHECKLIST - CEK SEBELUM OUTPUT]
1. Apakah reply ini lebih dari 3 kalimat? → PANGKAS.
2. Apakah reply ini bisa di-tweet dalam satu layar HP? → Kalau nggak, PENDEKIN.
3. Apakah ada kata filler ("sebenarnya sih", "kalo dipikir-pikir", "menurut pendapat saya")? → BUANG.

[QUALITY FINAL CHECK]
Sebelum output, baca ulang semua opsi. Kalau ada yang:
- Kayak robot → buang
- Gak nyambung sama tweet → buang
- Terlalu panjang kayak artikel → buang & pendekin
- Terlalu formal → buang

Pilih 1 opsi terbaik + alasan singkat.
Sebutkan teknik yang dipakai: Social Proof, Curiosity Gap, atau Authority.`;



export const PROVIDERS = {
  agnes: {
    label: 'Agnes AI',
    url: 'https://apihub.agnes-ai.com/v1/chat/completions',
    model: 'agnes-1.5-flash',
    keyHint: 'Dapatkan di platform.agnes-ai.com/settings/apiKeys',
    keyUrl: 'https://platform.agnes-ai.com/settings/apiKeys',
  },
  gemini: {
    label: 'Gemini AI Studio ☄️',
    url: 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions',
    model: 'gemini-2.5-flash',
    models: [
      { id: 'gemini-2.5-flash', name: '☄️ Gemini 2.5 Flash ⭐ (Recommended)' },
      { id: 'gemini-2.5-flash-lite', name: 'Gemini 2.5 Flash-Lite — Budget' },
      { id: 'gemini-2.5-pro', name: '🧠 Gemini 2.5 Pro — Premium Reasoning' },
      { id: 'gemini-3-flash-preview', name: '🔥 Gemini 3 Flash — Latest Gen' },
    ],
    keyHint: 'Gratis! Dapatkan di aistudio.google.com/app/apikey',
    keyUrl: 'https://aistudio.google.com/app/apikey',
  },
  openai: {
    label: 'OpenAI',
    url: 'https://api.openai.com/v1/chat/completions',
    model: 'gpt-4o-mini',
    keyHint: 'Dapatkan di platform.openai.com/api-keys',
    keyUrl: 'https://platform.openai.com/api-keys',
  },
  groq: {
    label: 'Groq',
    url: 'https://api.groq.com/openai/v1/chat/completions',
    model: 'llama-3.3-70b-versatile',
    keyHint: 'Dapatkan di console.groq.com/keys',
    keyUrl: 'https://console.groq.com/keys',
  },
  qwen: {
    label: 'Qwen (OpenRouter)',
    url: 'https://openrouter.ai/api/v1/chat/completions',
    model: 'qwen/qwen3-coder:free',
    keyHint: 'Dapatkan di openrouter.ai/workspaces/default/keys',
    keyUrl: 'https://openrouter.ai/workspaces/default/keys',
  },
  nvidia_free: {
    label: 'NVIDIA Free ✨',
    url: 'https://integrate.api.nvidia.com/v1/chat/completions',
    model: 'meta/llama-3.1-70b-instruct',
    models: [
      { id: 'meta/llama-3.1-70b-instruct', name: 'Llama 3.1 70B ⭐ (Recommended)' },
      { id: 'nvidia/llama-3.3-nemotron-super-49b-v1.5', name: '🧠 Nemotron Super 49B (Reasoning)' },
      { id: 'meta/llama-3.2-3b-instruct', name: 'Llama 3.2 3B — Fast' },
      { id: 'meta/llama-3.2-1b-instruct', name: 'Llama 3.2 1B — Ultra Fast' },
      { id: 'deepseek-ai/deepseek-v4-pro', name: '🧠 DeepSeek V4 Pro (1M ctx) *' },
      { id: 'deepseek-ai/deepseek-v4-flash', name: '🧠 DeepSeek V4 Flash (1M ctx) *' },
      { id: 'z-ai/glm-5.1', name: '🧠 GLM 5.1 (203K ctx) *' },
    ],
    keyHint: 'Gratis! Dapatkan di build.nvidia.com/settings/api-keys',
    keyUrl: 'https://build.nvidia.com/settings/api-keys',
  },
  cohere: {
    label: 'Cohere (Gratis) 🆓',
    url: 'https://api.cohere.ai/v2/chat',
    model: 'command-a-03-2025',
    models: [
      { id: 'command-a-03-2025', name: '🧠 Command-A 111B ⭐ (Recommended)' },
      { id: 'command-r-plus-08-2024', name: '💪 Command-R+ (RAG & Tool Use)' },
      { id: 'command-r7b-12-2024', name: '🚀 Command-R7B (Ultra Cepat)' },
    ],
    keyHint: 'Gratis! Dapatkan di dashboard.cohere.com/api-keys',
    keyUrl: 'https://dashboard.cohere.com/api-keys',
  },
};

export const CONFIG = {
  TEMPERATURE: 0.7,
  MAX_TOKENS: 2048,
};

export function getProvider() {
  if (typeof window === 'undefined') return 'agnes';
  const p = localStorage.getItem('reply_provider');
  return p && PROVIDERS[p] ? p : 'agnes';
}

export function saveProvider(provider) {
  if (typeof window === 'undefined') return;
  if (PROVIDERS[provider]) localStorage.setItem('reply_provider', provider);
}

export function getApiKey(provider) {
  if (typeof window === 'undefined') return '';
  const p = provider || getProvider();
  const key = localStorage.getItem(`apikey_${p}`);
  if (key) return key;
  // legacy fallbacks
  if (p === 'agnes') return localStorage.getItem('agnes_api_key') || '';
  if (p === 'gemini') return localStorage.getItem('gemini_api_key') || '';
  return '';
}

export function saveApiKey(key, provider) {
  if (typeof window === 'undefined') return;
  const p = provider || getProvider();
  localStorage.setItem(`apikey_${p}`, (key || '').trim());
}

export function getLanguage() {
  if (typeof window === 'undefined') return 'auto';
  return localStorage.getItem('reply_language') || 'auto';
}

export function saveLanguage(lang) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('reply_language', lang);
}

export function getTemperature() {
  if (typeof window === 'undefined') return 0.7;
  const val = localStorage.getItem('reply_temperature');
  return val !== null ? parseFloat(val) : 0.7;
}

export function saveTemperature(temp) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('reply_temperature', temp.toString());
}

export function getReplyCount() {
  if (typeof window === 'undefined') return 5;
  const val = localStorage.getItem('reply_count');
  return val !== null ? Math.max(2, Math.min(10, parseInt(val, 10))) : 5;
}

export function saveReplyCount(count) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('reply_count', Math.max(2, Math.min(10, count)).toString());
}

export function getTheme() {
  if (typeof window === 'undefined') return 'santai';
  return localStorage.getItem('reply_theme') || 'santai';
}

export function saveTheme(theme) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('reply_theme', theme);
}


// Generic provider model storage (supports all providers with models[])
export function getProviderModel(provider) {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem('provider_model_' + provider) || '';
}

export function saveProviderModel(provider, model) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('provider_model_' + provider, model);
}

export function getNvidiaModel() {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem('nvidia_model') || '';
}

export function saveNvidiaModel(model) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('nvidia_model', model);
}

const THEME_OVERRIDES = {
  santai: `[TEMA: SANTAI / SUPPORT - WAJIB DIIKUTI 100%]
Kamu lagi ngobrol santai sama temen deket. Tone lo: SUPPORTIF, nguatin, agree sama tweetnya.
ATURAN MUTLAK TEMA SANTAI:
- KAMU SETUJU dengan tweet. Jangan kontra, jangan debat, jangan menyindir.
- Bikin OP (original poster) ngerasa "wah ada yang sefrekuensi nih".
- Tambahin pengalaman pribadi atau "gue juga ngerasain".
- Humor ringan, self-deprecating boleh. Tapi jangan sarkasme.
- Bahasa gaul sehari-hari: "gue", "lo", "anjir", "wkwk", "btw".
- WAJIB 3-5 emoji positif: 😂💯🔥👏🙌😭🤯💢 (jangan pakai 💀🤡🙄😒🥱)
- KALIMAT PEMBUKA: "Buset relate banget", "Gue juga...", "Ini literally gue", "Nah ini!"
- CONTOH: "Buset relate banget sih ini 😂 gue juga dulu mikirnya gitu. Tapi setelah research 2 minggu ternyata emang bisa diakalin, cuma butuh effort dikit 💯"`,

  tajam: `[TEMA: TAJAM / KONTRA - WAJIB DIIKUTI 100%]
Kamu lagi roasting dengan elegan. Tone lo: MENYINDIR, KONTRA, SARKASTIK CERDAS.
ATURAN MUTLAK TEMA TAJAM:
- KAMU TIDAK SETUJU dengan tweet. Lo harus KONTRA atau MENYINDIR.
- Bikin OP mikir "anjir kena nih gue" — tapi tetap witty dan elegan, bukan toxic.
- Hot take yang bikin orang berhenti scroll. Bilang hal yang gak berani orang bilang.
- Sarkasme cerdas: ironi halus, kontradiksi, twisted logic.
- JANGAN PAKAI emoji positif (😂💯👏😭). PAKAI emoji sinis: 💀🤡🙄😒🥱🤔
- KALIMAT PEMBUKA: "Gue malah mikirnya...", "Unpopular opinion:", "Ini take aneh sih", "Gak juga kali"
- CONTOH: "Gue malah mikirnya ini cuma coping mechanism 🤔 orang bilang hustle culture toxic tapi malah posting jam 2 pagi. Pick one bro, atau lo bagian dari problemnya 💀"`,

  cerdas: `[TEMA: CERDAS / OPINI TEGAS + SOLUSI - WAJIB DIIKUTI 100%]
Kamu lagi ngasih perspektif baru yang insightful. Tone lo: OPINI TEGAS + KASIH SOLUSI.
ATURAN MUTLAK TEMA CERDAS:
- KAMU PUNYA OPINI TEGAS — gak cuma setuju atau kontra, tapi kasih SUDUT PANDANG BARU.
- WAJIB kasih SOLUSI konkret atau ALTERNATIF yang bisa dipraktekin.
- Pakai data, fakta, atau logika yang bikin orang mikir "wah bener juga".
- Tidak boleh cuma nge-roasting (itu tema TAJAM), juga tidak boleh cuma support (itu tema SANTAI).
- Tujuan: pembaca dapat INSIGHT + tahu harus ngapain setelah baca.
- Emoji 2-3: 💡🧐🔥✨📊 — untuk menekankan poin insight.
- KALIMAT PEMBUKA: "Yang jarang dibahas...", "Perspektif lain:", "Sebenernya ada solusi:", "Data-nya menarik:"
- CONTOH: "Yang jarang dibahas: distribusi justru lebih penting dari produk. Data tier 2-3 naik 3x lipat. Solusinya? Jangan jualan fitur, tapi jualan akses 💡 Fokus ke pain point spesifik per kota tier, bukan general messaging 🔥"`,
};

// ============================================================
// SMART AUTO-DETECT LANGUAGE — deteksi bahasa tweet input
// ============================================================

/**
 * Deteksi bahasa dari teks tweet secara heuristic.
 * Support: Indonesia, English, Jepang, Ibrani, Hindi + fallback
 * Prioritas: deteksi spesifik karakter script > keyword > common words
 */
export function detectLanguage(text) {
  if (typeof text !== 'string' || !text.trim()) return 'en';

  const t = text.trim();
  const len = t.length;

  // ── Script-based detection (paling akurat) ──

  // Hebrew: karakter 0x0590–0x05FF
  const hebrewChars = (t.match(/[֐-׿]/g) || []).length;
  if (hebrewChars > 2 && hebrewChars / len > 0.08) return 'he';

  // Hindi/Devanagari: karakter 0x0900–0x097F
  const hindiChars = (t.match(/[ऀ-ॿ]/g) || []).length;
  if (hindiChars > 2 && hindiChars / len > 0.08) return 'hi';

  // Jepang: Hiragana (0x3040–0x309F), Katakana (0x30A0–0x30FF), Kanji (0x4E00–0x9FFF)
  const jpChars = (t.match(/[぀-ゟ゠-ヿ一-鿿]/g) || []).length;
  if (jpChars > 2 && jpChars / len > 0.08) return 'ja';

  // ── Keyword-based detection ──

  // Indonesia: kata-kata khas Indo
  const indoWords = /(gue|gua|lo|lu|gak|nggak|ga|enggak|banget|bgt|sih|dong|deh|nih|tuh|ya|yah|kok|loh|lho|kan|dong|dong|anjir|anjay|njir|wkwk|wkwkwk|buset|bage|njay|brengsek|goblok|tolol|bacot|capek|deh|sama|aja|doang|dong|kalo|udah|abis|gitu|kayak|bang|bro|cu|bgst|ngapain|kenapa|gw|gk|pdhl|dgn|dll|dkk|sblm|ssdh|tdk|blm|sm|jg|tp|krn|jd|bkn|drpd|emang|emng|ntar|ntr|pake|pke|tau|tw|cuma|cuman)/gi;
  const indoMatch = (t.match(indoWords) || []).length;
  if (indoMatch >= 2) return 'id';

  // Inggris: kata-kata umum English (deteksi dari dominasi latin + common words)
  const engWords = /(the|and|for|that|this|with|you|are|not|but|have|from|they|will|just|what|when|can|all|your|been|there|their|about|would|which|some|like|more|than|its|time|only|also|into|other|then|them|these|over|back|after|first|well|even|because)/gi;
  const engMatch = (t.match(engWords) || []).length;

  // Cek apakah ada banyak karakter latin + dominasi English
  const latinChars = (t.match(/[a-zA-Z]/g) || []).length;
  if (latinChars / len > 0.5 && engMatch >= 1 && indoMatch < 2) return 'en';

  // ── Fallback: Indonesia (paling umum untuk user Indo) ──
  if (latinChars / len > 0.5 && indoMatch >= 1) return 'id';

  // Default: English
  return 'en';
}

/**
 * Mapping kode bahasa ke nama + aturan typo pasif
 */
const LANGUAGE_RULES = {
  id: {
    name: 'Bahasa Indonesia',
    typoReminder: `WAJIB CEK EYD/typo Indonesia: pastikan "memperbaiki" bukan "memperbaiki", "mengubah" bukan "mengubah", imbuhan tepat (me-, ber-, di-, ter-, pe-, ke-an, per-an), tidak ada kata baku yang salah eja. Gunakan KBBI sebagai acuan. Bahasa gaul boleh (gue, lo, gak, bgt) tapi typo struktural tetap DILARANG.`,
  },
  en: {
    name: 'English',
    typoReminder: `CHECK spelling: common mistakes like "recieve"→"receive", "seperate"→"separate", "definately"→"definitely", "occured"→"occurred", "accomodate"→"accommodate", "their/there/they're", "your/you're", "its/it's". Use contractions naturally but spell them correctly.`,
  },
  ja: {
    name: '日本語 (Japanese)',
    typoReminder: `日本語の表記チェック: 漢字の誤変換、送り仮名の間違い、長音記号の抜け（コンピュータ→コンピューター）、カタカナの小文字化ミスに注意。自然な日本語の語順と助詞（は、が、を、に、で）を確認。`,
  },
  he: {
    name: 'עברית (Hebrew/Israel)',
    typoReminder: `בדיקת איות עברית: וודא ניקוד נכון, כתיב מלא vs חסר, מילים נפוצות שגויות (כמו "בגלל" לא "בגלל"), שימוש נכון ב-ה' הידיעה, ו' החיבור. הימנע מעברית מקראית/ספרותית — השתמש בעברית מדוברת טבעית.`,
  },
  hi: {
    name: 'हिन्दी (Hindi/India)',
    typoReminder: `हिन्दी वर्तनी जाँच: मात्राओं की शुद्धता (छोटी इ/बड़ी ई, छोटी उ/बड़ी ऊ), हलंत का सही प्रयोग, अनुस्वार/अनुनासिक, संयुक्ताक्षर। प्राकृतिक हिन्दी या हिंग्लिश का प्रयोग करें — संस्कृतनिष्ठ भाषा से बचें।`,
  },
  auto: {
    name: 'Auto-detect',
    typoReminder: '',
  },
};

export async function generateReply(tweetText, apiKey, options = {}) {
  const {
    language = 'auto',
    temperature = 0.7,
    replyCount = 5,
    theme = 'santai',
    provider = getProvider(),
  } = options;
  const cfg = PROVIDERS[provider] || PROVIDERS.agnes;
  
  // Support custom model selection for all providers with models[]
  let model = cfg.model;
  if (cfg.models) {
    const savedModel = getProviderModel(provider);
    if (savedModel) model = savedModel;
  }

  let userMessage = tweetText;
  const overrides = [];

  // ── AUTO-DETECT + LANGUAGE ENFORCEMENT ──
  // Deteksi bahasa dari tweet input
  const detectedLang = detectLanguage(tweetText);
  const effectiveLang = language === 'auto' ? detectedLang : language;
  const langInfo = LANGUAGE_RULES[effectiveLang] || LANGUAGE_RULES.en;

  if (language !== 'auto') {
    // User manually selected language
    overrides.push(`[LANGUAGE OVERRIDE] Tulis SEMUA reply dalam bahasa: ${langInfo.name}. Abaikan bahasa tweet aslinya. Output HARUS dalam ${langInfo.name}.`);
  } else {
    // Auto-detect — beri tahu model bahasa yang terdeteksi
    overrides.push(`[LANGUAGE AUTO-DETECT] Tweet terdeteksi dalam bahasa: ${langInfo.name}. Tulis SEMUA reply dalam bahasa yang SAMA persis dengan bahasa tweet asli. Jangan campur bahasa lain.`);
  }

  // Tambah typo reminder sesuai bahasa
  if (langInfo.typoReminder) {
    overrides.push(`[TYPO CHECK - ${langInfo.name.toUpperCase()}] ${langInfo.typoReminder}`);
  }

  if (replyCount !== 5) {
    overrides.push(`Tulis ${replyCount} opsi reply (bukan 5). Sesuaikan jumlah opsi reply menjadi ${replyCount}.`);
  }

  if (theme && THEME_OVERRIDES[theme]) {
    overrides.push(THEME_OVERRIDES[theme]);
  }

    // ── FORMAT & TONE dari THEME OVERRIDES sudah cukup — jangan tambah aturan kontradiksi ──
  overrides.push('[WAJIB]: Ikuti 100% aturan tema di atas. Jangan campur tone santai dengan tajam, atau sebaliknya.');
  overrides.push('[FORMAT]: Tiap kalimat dipisah ENTER (baris baru), BUKAN paragraf disambung. Contoh:\n"Kalimat pertama 🔥\nKalimat kedua\nKalimat ketiga 😂"');
  overrides.push('[ANTI-TYPO]: Cek ejaan — jangan ada kata yang salah huruf. Typo = ciri bot.');
  
if (overrides.length > 0) {
    userMessage += '\n\n---\n[OVERRIDE SETTINGS]\n' + overrides.join('\n');
  }

  try {
    const response = await fetch(cfg.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userMessage },
        ],
        temperature,
        max_tokens: CONFIG.MAX_TOKENS,
      }),
    });

    if (!response.ok) {
      let msg = '';
      try {
        const errData = await response.json();
        msg = errData?.error?.message || '';
      } catch {
        msg = await response.text().catch(() => '');
      }
      if (response.status === 401) {
        throw new Error('Invalid API key. Check your key in settings.');
      } else if (response.status === 429) {
        throw new Error('Rate limited. Please wait a moment and try again.');
      } else if (response.status === 400) {
        throw new Error(`Bad request: ${msg}`);
      } else {
        throw new Error(`API Error (${response.status}): ${msg}`);
      }
    }

    const data = await response.json();
    
    // Cohere v2 response format: message.content is array of {type, text}
    let rawContent = '';
    if (data.message?.content && Array.isArray(data.message.content)) {
      rawContent = data.message.content
        .filter(c => c.type === 'text')
        .map(c => c.text)
        .join('') || '';
    }
    
    // OpenAI / NVIDIA / Groq / Qwen style: choices[0].message.content
    if (!rawContent) {
      const choice = data.choices?.[0]?.message;
      rawContent =
        choice?.content ||
        choice?.reasoning_content ||
        choice?.reasoning ||
        data.choices?.[0]?.text ||
        '';
    }

    if (!rawContent) {
      throw new Error('The API returned an empty response. Try a different tweet.');
    }

    return rawContent;
  } catch (err) {
    if (err instanceof TypeError && err.message === 'Failed to fetch') {
      throw new Error('Network error — check your internet connection or the API may be unreachable.');
    }
    throw err;
  }
}

// ============================================================
// Reply text sanitizers (exported for testability)
// ============================================================

// Locale-aware punctuation: include CJK full-width punctuation, Hebrew/Arabic
// punctuation, and Devanagari danda so we don't false-trigger spacing fixes.
const PUNCT_AFTER_NO_SPACE = /([.,;:!?])([^\s.,;:!?)\]\}'"\u201D\u2019\u3001\u3002\uFF0C\uFF0E])/g;
const PUNCT_BEFORE_SPACE = /[\u0020\t]+([.,;:!?])/g;

export function cleanReplyText(text) {
  if (typeof text !== 'string') return '';
  return text
    .trim()
    // Strip outer quotes
    .replace(/^["'\u201C\u201D\u2018\u2019`]+|["'\u201C\u201D\u2018\u2019`]+$/g, '')
    // Strip "Opsi X:", "Reply X:", "Option X:" prefix
    .replace(/^(?:Opsi|Reply|Option)\s*\d+[.:)\-\s]*/gi, '')
    // Strip bold markdown **text** -> text
    .replace(/\*\*(.+?)\*\*/g, '$1')
    // Strip italic markdown *text* -> text
    .replace(/(?<!\\)\*(.+?)\*/g, '$1')
    // Strip heading markers at start of lines
    .replace(/^#{1,4}\s+/gm, '')
    // Strip horizontal rules (---, ___, ***)
    .replace(/^[-_*]{3,}$/gm, '')
    // Replace em-dash with comma+space
    .replace(/\u2014/g, ', ')
    // Replace en-dash with hyphen
    .replace(/\u2013/g, '-')
    // Strip bullet markers at line start
    .replace(/^\s*[-\u2022\u00B7]\s+/gm, '')
    // Strip numbering like "1)" or "1." at line start
    .replace(/^\s*\d+[.)]\s+/gm, '')
    // Clean double spaces
    .replace(/ {2,}/g, ' ')
    // Clean triple+ newlines to double
    .replace(/\n{3,}/g, '\n\n')
    // Fix lone quote/punctuation on its own line
    .replace(/\n\s*(["'\u201C\u201D\u2018\u2019])\s*$/g, '$1')
    .replace(/^\s*(["'\u201C\u201D\u2018\u2019])\s*\n/g, '$1')
    .trim();
}

export function finalizeReply(text) {
  if (typeof text !== 'string') return '';
  let out = text;
  // Remove stray markdown links [text](url)
  out = out.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  // Remove backtick code formatting
  out = out.replace(/`([^`]+)`/g, '$1');
  // Space before punctuation (ASCII only — do not touch CJK/Hebrew/Hindi punctuation)
  out = out.replace(PUNCT_BEFORE_SPACE, '$1');
  // Missing space after punctuation
  out = out.replace(PUNCT_AFTER_NO_SPACE, '$1 $2');
  // Collapse repeated punctuation (preserve "..." and "?!" intentional combos)
  out = out.replace(/([,;:])\1+/g, '$1');
  // Trim per line and collapse spaces
  out = out.split('\n').map((l) => l.trim()).join('\n');
  out = out.replace(/ {2,}/g, ' ').trim();
  return out;
}

export function sanitizeReply(text) {
  return finalizeReply(cleanReplyText(text));
}

export function parseResponse(rawText) {
  const result = {
    confidence: { score: null, reason: '' },
    angle: '',
    replies: [],
    recommendation: { pick: null, reason: '', technique: '' },
    raw: rawText,
  };

  try {
    // Confidence score
    const scoreMatch = rawText.match(/[Ss]kor[:\s]*(\d+)\s*\/\s*10/);
    if (scoreMatch) result.confidence.score = parseInt(scoreMatch[1], 10);

    // Confidence reason
    const reasonMatch = rawText.match(/[Aa]lasan[:\s]*(.+?)(?:\n|$)/);
    if (reasonMatch) result.confidence.reason = reasonMatch[1].trim();

    // Angle
    const angleMatch = rawText.match(/[Aa]ngle[:\s]*\[?\s*(Supportif|Disruptor)\s*\]?/i);
    if (angleMatch) result.angle = angleMatch[1];

    // Replies
    const replySectionMatch = rawText.match(
      /(?:Lima Opsi Reply|Opsi Reply|opsi reply|Reply)[\s\S]*?\n([\s\S]*?)(?=###\s*4\.|Rekomendasi|$)/i
    );
    const replySection = replySectionMatch ? replySectionMatch[1] : rawText;

    let replies = [];
    const numbered = replySection.matchAll(
      /(?:^|\n)\s*(?:\*\*)?(?:Opsi\s*)?(\d)[.):\s]*(?:\*\*)?[:\-\s]*([\s\S]*?)(?=\n\s*(?:\*\*)?(?:Opsi\s*)?\d[.):]|\n\s*#{2,}|\n\s*\*?\*?(?:4\.|Rekomendasi)|$)/gi
    );

    for (const match of numbered) {
      const text = cleanReplyText(match[2]);
      if (text.length > 0 && text.length < 500) replies.push(text);
    }

    if (replies.length < 3) {
      const lines = replySection.split(/\n\s*\n/).filter((l) => l.trim().length > 10);
      replies = lines
        .slice(0, 10)
        .map((l) => cleanReplyText(l))
        .filter((l) => l.length > 0);
    }

    replies = replies.map((r) => finalizeReply(r));

    result.replies = replies.slice(0, 10);

    // Recommendation
    const recoMatch = rawText.match(/(?:Rekomendasi|rekomendasi)[:\s]*([\s\S]*?)$/i);
    if (recoMatch) {
      const recoText = recoMatch[1].trim();
      const pickMatch = recoText.match(/[Oo]psi\s*(\d)/);
      if (pickMatch) result.recommendation.pick = parseInt(pickMatch[1], 10);

      // Capture all techniques mentioned
      const techMatches = [...recoText.matchAll(/(Social Proof|Curiosity Gap|Authority)/gi)];
      if (techMatches.length > 0) {
        result.recommendation.technique = techMatches.map((m) => m[1]).join(' + ');
      }

      result.recommendation.reason = recoText
        .split('\n')
        .filter((l) => l.trim().length > 0)
        .slice(0, 3)
        .join(' ')
        .replace(/\*\*(.+?)\*\*/g, '$1')
        .replace(/(?<!\\)\*(.+?)\*/g, '$1')
        .replace(/^#{1,4}\s+/gm, '')
        .substring(0, 300);
    }
  } catch (e) {
    console.warn('Parse error, falling back to raw:', e);
  }

  return result;
}
