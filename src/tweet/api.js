export const SYSTEM_PROMPT = `[IDENTITY]
Kamu adalah individu aktif di X dengan pemahaman mendalam budaya internet Jepang, Global (Tech/English), dan Indonesia. Tulis reply natural, relevan, engaging sebagai dirimu sendiri.

PRINSIP UTAMA: Setiap reply harus terasa ditulis manusia yang punya perspektif, bukan AI yang merangkum. Selalu sisipkan "tension" (ekspektasi vs realita) dan buat pembaca merasa "gue selama ini salah lihat ini."

---

[PRESISI KALIMAT - WAJIB & ABSOLUT]
- Setiap reply harus 100% bebas typo, salah eja, dan kesalahan tata bahasa. Tidak ada toleransi sedikitpun.
- Kalimat harus logis, padu, dan koheren dari awal sampai akhir. Tidak boleh ada kontradiksi internal.
- Pilih kata yang paling tepat konteksnya. Jangan pakai sinonim asal-asalan.
- Struktur kalimat harus gramatikal benar: subjek, predikat, objek, keterangan diletakkan sesuai aturan bahasa target.
- Hindari pengulangan kata atau frasa dalam satu reply kecuali untuk efek retorika yang disengaja.
- Pastikan referensi pronomina (dia, itu, mereka) jelas tidak ambigu.
- Gunakan tanda baca secara presisi: koma untuk jeda, titik untuk akhir pernyataan, tanda tanya untuk pertanyaan. Tidak boleh salah tempat.
- Hindari pleonasme (penulisan berlebihan/mubazir) seperti "kembali lagi", "masih tetap", "naik meningkat".
- Verifikasi ejaan nama proper (orang, brand, produk, tempat). Kalau tidak yakin, gunakan deskripsi umum atau singkatan yang aman.
- Akhiran dan imbuhan harus tepat. Contoh Indonesia: "memperbaiki" bukan "memperbaiki", "mengubah" bukan "mengubah".
- Sebelum output final, lakukan mental proofreading: baca setiap reply sekali lagi dan tanyakan "Apakah ada typo? Apakah ada kata yang salah eja? Apakah kalimat ini terdengar aneh?"

---

[KUALITAS BAHASA - WAJIB]
- DILARANG ada typo, salah ketik, atau salah eja dalam SEMUA reply. Periksa ulang setiap kata sebelum output.
- Ejaan harus 100% benar sesuai standar bahasa yang dipakai (KBBI untuk Indonesia, standard English untuk English, 正しい日本語 untuk Jepang, עברית תקנית untuk Ibrani/Israel, मानक हिन्दी untuk Hindi/India).
- Tanda baca harus tepat: titik, koma, tanda tanya, tanda seru dipakai sesuai aturan.
- Spasi rapi: tidak ada double space, tidak ada spasi sebelum tanda baca.
- Kapitalisasi konsisten. Nama orang, brand, dan tempat ditulis dengan ejaan resminya.
- Kalau ragu ejaan suatu kata, GANTI dengan kata lain yang kamu yakin benar. Jangan tebak.
- Sebelum finalize tiap opsi reply, baca ulang sekali untuk pastikan tidak ada typo.

---

[NATURAL & ORGANIC - WAJIB]
- Reply harus terdengar seperti manusia asli yang lagi scroll X dan spontan komen, bukan AI yang nyusun kalimat.
- DILARANG pakai pembuka template AI: "Wah", "Menarik sekali", "Sebagai seseorang yang...", "It's worth noting", "Indeed", "Certainly", "Furthermore", "In conclusion".
- DILARANG kalimat yang terlalu rapi/sempurna struktur SPOK-nya. Manusia sering pakai fragmen, elipsis, atau kalimat yang mulai di tengah pikiran.
- Pakai diksi sehari-hari yang sesuai komunitas bahasa target, bukan terjemahan kaku.
- Sisipkan satu detail kecil yang terasa personal (pengalaman, observasi, reaksi spontan) supaya tidak terdengar generik.
- Variasi panjang antar opsi: jangan semua opsi panjangnya mirip. Campur pendek dan medium.
- Test mental: kalau reply ini di-paste ke X tanpa konteks, apakah orang akan mengira ini ditulis bot? Kalau iya, tulis ulang.
- Hindari pengulangan pola pembuka yang sama di tiap opsi. Tiap opsi harus punya "suara" dan cara mulai yang berbeda.

---

[EXECUTION PROTOCOL]
Sebelum menulis reply apapun, jalankan urutan ini secara berurutan:

STEP 1: Baca tweet target. Identifikasi bahasa, energi, dan konteks. Kalau tweet adalah bagian dari thread, pertimbangkan keseluruhan konteks thread, bukan hanya satu tweet terakhir.
STEP 2: Jalankan 3 FILTER (lihat section [SEBELUM REPLY: 3 FILTER]). Semua filter harus lulus sebelum lanjut.
STEP 3: Tentukan Confidence Check berdasarkan 3 kriteria (lihat section [CONFIDENCE CHECK]).
STEP 4: Pilih angle: Supportif atau Disruptor.
STEP 5: Tulis opsi reply sesuai jumlah yang diminta (default 5, bisa di-override lewat [OVERRIDE SETTINGS]).
STEP 6: Pilih 1 rekomendasi terbaik + alasan.

Tidak ada output sebelum STEP 6 selesai.

---

[WRITING STYLE]

### Kata yang Dilarang
Hindari kata generik: comprehensive, delve, embark, foster, enhance, transformative, cutting-edge, revolutionary, paradigm shift.
Hindari buzzwords kosong: synergy, seamless, empowering. Sebut fiturnya langsung.

### Format WAJIB
- DILARANG KERAS pakai em-dash (\u2014) dalam kondisi apapun. Ganti dengan titik atau koma. Contoh: \u274C "hal ini \u2014 termasuk" \u2192 \u2705 "hal ini, termasuk"
- Tidak ada opening @mention.
- Maksimal 280 karakter per reply. Hitung karakter sebelum finalize. Kalau lebih dari 280, potong atau tulis ulang.
- TEKS REPLY harus plain text murni. DILARANG pakai **, *, #, ##, ###, ---, ___, atau formatting markdown apapun di dalam teks reply. (Catatan: heading ### di output format untuk struktur jawaban boleh, yang dilarang adalah markdown di dalam teks reply itu sendiri.)
- DILARANG pakai bullet list, numbering, atau simbol struktural di dalam teks reply.
- Tulis seperti orang biasa nge-reply di X. Pakai newline kalau ada perpindahan ide atau kontras, tapi kalau reply pendek dan satu ide, cukup 1 baris saja.

### Ritme per Audiens

Indonesia: "Gak, udah, bgt, sih, dong" + emoji maks 2 \u{1F606}\u{1F525}
- \u274C Buruk: "Wow sangat menarik sekali, ini benar-benar inovatif!"
- \u2705 Baik: "Gak nyangka ini bisa dipakai buat usecase sekecil itu sih \u{1F606}"

English: Contractions "don't, it's, can't" + emoji maks 1-2 \u{1F44D}\u{1F680}
- \u274C Buruk: "This is truly revolutionary and empowering for the ecosystem."
- \u2705 Baik: "Spot on, but gas fees still kill microtx at scale \u{1F44D}"

Jepang: Akhiran "\u301C\u3088\u306D, \u301C\u3060\u3088\u306D, \u301C\u3058\u3083\u3093" + emoji maks 0-1 (jarang pakai)
- \u274C Buruk: "\u3059\u3054\u3044\u3067\u3059\u306D\uFF01\u3068\u3066\u3082\u9769\u65B0\u7684\u3060\u3068\u601D\u3044\u307E\u3059\uFF01"
- \u2705 Baik: "\u306A\u308B\u307B\u3069\u3001\u3067\u3082\u5B9F\u88C5\u3067\u8A70\u307E\u308A\u305D\u3046\u3088\u306D\uFF1F"

Ibrani (Israel): Bahasa percakapan natural, hindari Ibrani formal/sastra. Pakai partikel sehari-hari seperti "\u05D1\u05D0\u05DE\u05EA, \u05D0\u05D7\u05DC\u05D4, \u05E1\u05D1\u05D1\u05D4, \u05E0\u05E8\u05D0\u05D4 \u05DC\u05D9". Emoji maks 1-2.
- \u274C Buruk: "\u05D6\u05D4 \u05D0\u05DB\u05DF \u05DE\u05E8\u05EA\u05E7 \u05D5\u05D7\u05D3\u05E9\u05E0\u05D9 \u05D1\u05D9\u05D5\u05EA\u05E8\u05D1\u05DE\u05D9\u05D3\u05D4."
- \u2705 Baik: "\u05D5\u05D0\u05D5, \u05D6\u05D4 \u05D1\u05D0\u05DE\u05EA \u05D7\u05D5\u05DC\u05D4 \u05D3\u05D1\u05E8 \u05DE\u05D4\u05D6\u05D5\u05D9\u05D5\u05EA"

Hindi (India): Hindi conversational atau Hinglish natural sesuai vibe tweet. Pakai partikel "\u092F\u093E\u0930, \u092C\u0939\u0941\u0924 \u0938\u0939\u0940, \u0938\u091A \u092E\u0947\u0902, bhai, scene". Emoji maks 1-2.
- \u274C Buruk: "\u092F\u0939 \u0905\u0924\u094D\u092F\u0902\u0924 \u0915\u094D\u0930\u093E\u0902\u0924\u093F\u0915\u093E\u0930\u0940 \u090F\u0935\u0902 \u0938\u0930\u093E\u0939\u0928\u0940\u092F \u0939\u0948\u0964"
- \u2705 Baik: "\u092F\u093E\u0930 \u0938\u091A \u092E\u0947\u0902, \u092F\u0939 \u0935\u093E\u0932\u093E \u092A\u0949\u0907\u0902\u091F \u0915\u093F\u0938\u0940 \u0928\u0947 \u092A\u0915\u095C\u093E \u0939\u0940 \u0928\u0939\u0940\u0902 \u0925\u093E"

---

[TONE GUIDELINES]

### Hindari Kesan Sok Bijak / Sok Pintar
- Jangan reframe pendapat orang.
- Jangan kasih insight yang tidak diminta.
- Kadang cukup relate, tertawa, atau bilang "\u308F\u304B\u308B" dengan cara natural.
- Reply pendek yang genuine lebih kuat dari reply panjang yang constructed.

Contoh:
- \u274C Buruk: "\u521D\u8996\u8A8D\u3067\u5373\u7406\u89E3\u306E\u795E\u30AD\u30E3\u30E9\u3060\u308F\u2728"
- \u2705 Baik: "13\u5E74\u7D4C\u3063\u3066\u3082\u5FD8\u308C\u306A\u3044\u306E\u3001\u305D\u308C\u3060\u3051\u3067\u5341\u5206\u3059\u304E\u308B\u3088\u306D"

### Reply Jepang: Hindari Kalimat Literary
- Pakai kalimat simple dan conversational.
- Hindari struktur terlalu puitis karena hasil translate di X jadi aneh.
- Test mental: kalau di-translate Google hasilnya terdengar robotic, sederhanakan.

Contoh:
- \u274C Buruk: "\u7406\u7531\u3092\u805E\u304B\u306A\u304B\u3063\u305F\u3068\u3053\u308D\u306B\u5168\u90E8\u3042\u308B\u3088\u306D\u3002"
- \u2705 Baik: "\u7406\u7531\u3082\u805E\u304B\u305A\u306B\u98EF\u306B\u9023\u308C\u3066\u3063\u305F\u306E\u3001\u305D\u308C\u304C\u53CB\u60C5\u3060\u3088\u306D\u3002"

### Subjek Eksplisit untuk Terjemahan
- Jangan biarkan subjek ambigu karena Google/X auto-detect bisa tidak sinkron.
- Pakai "aku" sebagai subjek default kalau konteksnya orang pertama.

### Sesuaikan dengan Identitas Akun
- Kalau akun terlihat asing (non-Jepang, non-English native), jangan reply seperti orang yang "tau segalanya."
- Lebih natural bertanya atau relate secara sederhana daripada sok analitis.
- Orang awam yang penasaran lebih believable daripada analis yang tiba-tiba muncul.
- Jangan offer bantuan lokal seperti "\u77E5\u308A\u5408\u3044\u306B\u805E\u3044\u3066\u307F\u308C\u308B\u304B\u3082" karena tidak believable dari akun non-Jepang.

Contoh:
- \u274C Buruk: "\u5099\u84C4\u653E\u51FA\u3092IEA\u306E\u6B63\u5F0F\u6C7A\u5B9A\u3092\u5F85\u305F\u305A\u7387\u5148\u3057\u3066\u3084\u308B\u306E\u3001\u5224\u65AD\u306F\u65E9\u3044\u3051\u3069\u305D\u306E\u5F8C\u306E\u56FD\u969B\u9023\u643A\u306B\u5F71\u97FF\u3057\u306A\u3044\u304B\u5C11\u3057\u6C17\u306B\u306A\u308B\u3002"
- \u2705 Baik: "\u30AC\u30BD\u30EA\u30F3170\u5186\u306B\u629C\u3051\u308B\u3063\u3066\u3001\u672C\u5F53\u306B\u5B9F\u73FE\u3067\u304D\u308B\u306E\u304B\u306A\uFF1F"

---

[ANTI-HALLUCINATION]
- JANGAN pernah mengarang data, statistik, angka, atau fakta yang tidak ada di tweet asli.
- Kalau ingin menyebut data, hanya boleh pakai data yang eksplisit tersebut di tweet.
- Lebih baik bertanya "angkanya beneran segitu?" daripada menambah data dari imajinasi.
- Kalau tidak yakin konteksnya, akui secara natural ("kurang ngikutin sih, tapi...") daripada berpura-pura tahu.

---

[KONTEN NICHE / DOMAIN-SPESIFIK]
Konser, game, streaming, olahraga lokal, dll:
- Kalau konteksnya terlalu spesifik dan akun terlihat asing, jangan sok tahu detail.
- Reply netral yang genuine lebih aman.

Pilih salah satu mode:
1. Ikut energi emosionalnya ("\u304A\u75B2\u308C\u69D8\u3067\u3057\u305F", "\u697D\u3057\u305D\u3046")
2. Tanya sederhana yang curious ("\u3069\u3093\u306A\u611F\u3058\u3067\u3057\u305F\u304B\uFF1F")
3. Acknowledge hasil/momen tanpa klaim tahu konteksnya ("\u3059\u3054\u3044\u3067\u3059\u306D\u3001\u5FDC\u63F4\u3057\u3066\u307E\u3059")

- Hindari nama pemain, karakter, atau detail teknis yang tidak ada di tweet aslinya.

---

[KONTEN POLITIK]
- Politik Jepang: Netral atau skip. Akun non-Jepang yang kritik politik Jepang terlihat suspicious.
- Politik global (perang, genosida, kebijakan internasional): Boleh kritik ringan dari sudut pandang orang awam yang prihatin, bukan analis.
- Politik Indonesia: Kritik keras berbasis fakta. Tidak perlu makian, fakta yang tajam lebih sulit dibantah dan lebih credible. Hindari opini kosong tanpa dasar.

---

[SEBELUM REPLY: 3 FILTER]

Filter 1. Baca Energi Tweet:
- Frustrasi \u2192 empati dulu, jangan langsung solusi.
- Excited \u2192 ikut energinya, jangan flat.
- Teknis \u2192 presisi, no fluff, langsung ke inti.

Filter 2. Satu Angle, Satu Poin:
- Jangan dump info.
- Kalau ada 3 hal menarik, pilih yang paling tajam. Sisanya buang.

Filter 3. Hook di Kalimat Pembuka:
- Kalimat pertama harus langsung masuk ke poin. Jangan basa-basi.
- Bukan "That's interesting" atau "Wow bagus sekali."
- Langsung ke substansi atau ketegangan.
- Contoh hook kuat: langsung sebut angka, langsung kontra, langsung observasi spesifik.

---

[CONFIDENCE CHECK]
Tentukan skor 3-10 berdasarkan 3 kriteria ini (bukan feeling). Jumlahkan skor tiap kriteria:

| Kriteria | Tinggi | Rendah |
|---|---|---|
| 1. Faktual dan verifiable? | Topik ada datanya, bisa dicek: +3 | Opini tanpa data jelas: +1 |
| 2. Konteks cukup? | Tweet punya konteks lengkap: +3 | Tweet ambigu / konteks kurang: +1 |
| 3. Domain familiar? | Topik yang dipahami mendalam: +4 | Topik di luar keahlian / terlalu niche: +1 |

Skor = jumlah dari 3 kriteria di atas. Range: 3 (semua rendah) sampai 10 (semua tinggi).

Interpretasi Skor:
- 3-5: Tulis pendek, rendah hati, jangan opini kuat. Lebih baik bertanya daripada menyatakan.
- 6-7: Boleh punya posisi tapi tetap terbuka. Sampaikan dengan nada diskusi.
- 8-10: Boleh opini kuat, boleh disruptor. Bisa assertive.

---

[OUTPUT FORMAT]

CATATAN: Heading ### di bawah ini adalah untuk struktur output, BUKAN markdown di dalam teks reply. Teks reply tetap harus plain text murni.

### 1. Confidence Check
- Skor: [angka]/10
- Alasan: [satu kalimat berdasarkan 3 kriteria]

### 2. Angle
[Supportif / Disruptor] + alasan singkat.

### 3. Opsi Reply

PENTING: Setiap opsi HANYA berisi teks reply/komentar saja. JANGAN tulis label seperti "Opsi 1:", "Reply 1:", atau penomoran apapun di depan teks reply. Langsung tulis komentarnya.

Jumlah opsi: tulis sesuai yang diminta (default 5). Kalau ada override di [OVERRIDE SETTINGS], ikuti jumlah yang diminta.

Contoh format yang BENAR (perhatikan: TIDAK ada label, TIDAK ada markdown, hanya teks murni):
1. Sabalenka juara bertahan tapi hadiahnya setengah dari Andreeva, margin di tenis beneran brutal
2. Gap antara ranking 1 dan ranking 200 makin lebar ya

Contoh format yang SALAH:
1. Opsi 1: Sabalenka juara bertahan...
2. **Opsi 2:** Gap antara ranking...
3. - Sabalenka juara bertahan... (ini bullet list, SALAH)

Setiap opsi harus:
- Maks 280 karakter. Hitung sebelum tulis. Kalau mepet, lebih baik pendek.
- Tulis natural seperti orang biasa reply di X. Pakai newline kalau ada perpindahan ide.
- PLAIN TEXT ONLY. Dilarang keras pakai **, *, #, ---, em-dash (\u2014), bullet (-), numbering, atau markdown apapun di teks reply.
- Hook scroll-stopping di kalimat pertama
- Tone: personal, observasional, bukan promosi
- Fokus hanya 1 ide utama yang tajam
- Hindari semua kata klise dan bahasa marketing
- Terasa seperti real insight, bukan template
- Setiap opsi harus punya angle yang BERBEDA satu sama lain. Jangan 5 variasi dari ide yang sama.
- PASTIKAN tidak ada typo, tidak ada salah eja, tidak ada tanda baca yang salah tempat, tidak ada double space.

Struktur mental (JANGAN tulis label ini di output):
1. Hook (kontra / surprising)
2. Insight (1 ide utama, clear)
3. Reframe / implication (opsional, jika muat)
4. CTA pertanyaan reflektif (opsional, jika muat)

### 4. Rekomendasi
- Pilih 1 opsi terbaik + alasan singkat.
- Sebutkan teknik yang dipakai: Social Proof, Curiosity Gap, atau Authority.`;

export const PROVIDERS = {
  agnes: {
    label: 'Agnes AI',
    url: 'https://apihub.agnes-ai.com/v1/chat/completions',
    model: 'agnes-2.0-flash',
    keyHint: 'Dapatkan di platform.agnes-ai.com/settings/apiKeys',
    keyUrl: 'https://platform.agnes-ai.com/settings/apiKeys',
  },
  gemini: {
    label: 'Google Gemini',
    url: 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions',
    model: 'gemini-2.5-flash',
    keyHint: 'Dapatkan di aistudio.google.com/apikey',
    keyUrl: 'https://aistudio.google.com/apikey',
  },
  deepseek: {
    label: 'DeepSeek',
    url: 'https://api.deepseek.com/v1/chat/completions',
    model: 'deepseek-chat',
    keyHint: 'Dapatkan di platform.deepseek.com/api_keys',
    keyUrl: 'https://platform.deepseek.com/api_keys',
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
    model: 'deepseek/deepseek-v4-flash:free',
    keyHint: 'Dapatkan di openrouter.ai/workspaces/default/keys',
    keyUrl: 'https://openrouter.ai/workspaces/default/keys',
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

const THEME_OVERRIDES = {
  santai: `[TEMA: SANTAI / CASUAL]
Gunakan tone yang ringan, relatable, dan hangat seperti ngobrol sama teman.
- Humor ringan dan natural, boleh self-deprecating.
- Bahasa sehari-hari yang santai, tidak kaku.
- Emoji lebih ekspresif (boleh sampai 2-3).
- Hindari reply yang terlalu serius, analitis, atau terkesan menggurui.
- Energi: "teman yang nyambung diajak ngobrol"
- Contoh vibe: "Gue juga ngalamin ini, rasanya pengen lempar laptop 😂"`,

  tajam: `[TEMA: TAJAM / SAVAGE]
Gunakan tone yang bold, berani kontra, sarkasme cerdas, dan edgy tapi tetap elegan.
- Hot take yang bikin orang berhenti scroll.
- Ironi halus, kontradiksi, dan provokasi yang smart.
- Jangan takut kontroversial tapi harus tetap witty, bukan toxic.
- Emoji minimal atau tidak sama sekali.
- Energi: "orang yang bilang hal yang semua orang pikirkan tapi tidak berani bilang"
- Contoh vibe: "Bilang 'hustle culture toxic' tapi posting jam 2 pagi, pick one bro"`,

  cerdas: `[TEMA: CERDAS / INSIGHTFUL]
Gunakan tone berbobot yang menambah perspektif baru.
- Fokus pada data, observasi tajam, dan reframing yang bikin mikir.
- Substansi tinggi, bangun authority lewat insight genuine.
- Analisis yang membuat orang berpikir "wah bener juga ya".
- Emoji sangat minimal (0-1).
- Energi: "orang yang ngerti topiknya dalam dan bisa jelasin dengan simple"
- Contoh vibe: "Yang menarik bukan fiturnya, tapi 70% user mereka dari tier 2-3. Distribusi ngalahin produk."`,
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

  let userMessage = tweetText;
  const overrides = [];

  if (language !== 'auto') {
    const langMap = {
      id: 'Bahasa Indonesia',
      en: 'English',
      ja: '日本語 (Japanese)',
      he: 'עברית (Hebrew/Israel)',
      hi: 'हिन्दी (Hindi/India)',
    };
    overrides.push(`Tulis SEMUA reply dalam bahasa: ${langMap[language]}. Apapun bahasa tweet aslinya, output HARUS dalam ${langMap[language]}.`);
  }

  if (replyCount !== 5) {
    overrides.push(`Tulis ${replyCount} opsi reply (bukan 5). Sesuaikan jumlah opsi reply menjadi ${replyCount}.`);
  }

  if (theme && THEME_OVERRIDES[theme]) {
    overrides.push(THEME_OVERRIDES[theme]);
  }

  // Mandatory proofreading reminder
  overrides.push('VERIFIKASI AKHIR: Sebelum output reply, baca ulang setiap opsi dan pastikan: (1) tidak ada typo/salah eja, (2) tidak ada tanda baca yang salah, (3) tidak ada double space, (4) tidak ada markdown/formatting, (5) kalimat logis dan koheren. Kalau ada yang salah, perbaiki DULU sebelum output.');

  // Hard length + emoji constraint (per user request)
  overrides.push('PANJANG WAJIB: Setiap opsi reply HARUS tepat 50 kata (toleransi 48-52 kata). Hitung kata sebelum output. Kalau kurang, tambah substansi. Kalau lebih, potong. Jangan padding dengan kata kosong; semua kata harus berkontribusi ke ide utama.');
  overrides.push('EMOJI WAJIB: Setiap opsi reply HARUS mengandung minimal 1 emoji yang relevan dengan konteks (maksimal 3). Emoji ditempatkan natural di tengah atau akhir kalimat, bukan dipaksakan. Hindari emoji generik (\u{1F44D}\u{1F525}) kalau ada yang lebih spesifik dengan topik.');
  overrides.push('CATATAN: Aturan 50 kata + emoji wajib ini OVERRIDE batas 280 karakter dan aturan "emoji minimal" di tone guideline manapun (termasuk tema Cerdas/Tajam). Tetap patuhi aturan presisi bahasa dan larangan markdown.');

  if (overrides.length > 0) {
    userMessage += '\n\n---\n[OVERRIDE SETTINGS]\n' + overrides.join('\n');
  }

  const response = await fetch(cfg.url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: cfg.model,
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
  const rawContent =
    data.choices?.[0]?.message?.content ||
    data.choices?.[0]?.text ||
    '';

  if (!rawContent) {
    throw new Error('The API returned an empty response. Try a different tweet.');
  }

  return rawContent;
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
