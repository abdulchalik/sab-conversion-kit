# SAB Conversion Kit — Usage Guide

> Versi: 1.0.0 · Terakhir diperbarui: April 2026

---

## Overview

**SAB Conversion Kit** adalah starter kit berbasis **Tailwind CSS** yang dirancang khusus untuk membangun landing page dan marketing pages berkualitas tinggi dengan cepat. Kit ini digunakan oleh tim SAB Agency untuk men-deploy halaman konversi ke client — mulai dari lead capture, webinar registration, e-commerce, hingga portfolio brand.

### Teknologi yang digunakan

- **Tailwind CSS v3** — utility-first CSS framework
- **PostCSS + Autoprefixer** — build pipeline
- **Vanilla JavaScript** — untuk interaktivitas (countdown, accordion, carousel, dll.)
- **Google Fonts** — tipografi per-template
- **Vercel** — deployment target (via `vercel.json`)

### Struktur folder

```
sab-conversion-kit/
├── templates/          # Halaman lengkap siap deploy
├── components/         # UI blocks reusable (potongan siap tempel)
├── assets/
│   ├── css/            # Input CSS per template + output compiled
│   ├── js/             # JavaScript helpers (jika ada)
│   └── images/         # Asset gambar
├── docs/               # Dokumentasi (kamu sedang di sini)
├── tailwind.config.js  # Konfigurasi warna & font per template
├── package.json        # Scripts build/dev per template
└── vercel.json         # Konfigurasi deployment Vercel
```

---

## Daftar Templates

Setiap template adalah halaman HTML mandiri dengan CSS compiled-nya sendiri. Berikut adalah daftar lengkap beserta use case dan cara deploy.

---

### 1. `landing-lead-capture.html`

**Use case:** Halaman utama untuk mengumpulkan lead — nama, email, nomor WA — dengan urgency bar, hero form, dan bukti sosial.

**Cocok untuk:** Penawaran konsultasi gratis, free trial, download lead magnet.

**Fitur unggulan:**
- Urgency bar sticky di atas (countdown timer)
- Form 2-kolom: benefit list + form card
- CTA submit langsung ke WhatsApp
- Social proof section

**CSS:** `assets/css/output.css`
**Build script:** `npm run build`

**Preview section:**
```
[URGENCY BAR] 🔥 Hanya 50 slot — Berakhir: 00:00:00
[HERO] Headline besar + benefit list + form nama/WA
[SOCIAL PROOF] Logo client / testimoni singkat
```

---

### 2. `landing-service.html`

**Use case:** Agency profile page / company landing page untuk memperkenalkan layanan secara lengkap.

**Cocok untuk:** Digital agency, konsultan, freelancer, studio kreatif.

**Fitur unggulan:**
- Navbar fixed dengan scroll-aware background
- Hero parallax dengan dark theme
- Service cards 3-kolom
- Stats counter animasi
- Testimoni + CTA akhir

**CSS:** `assets/css/output-service.css`
**Build script:** `npm run build:service`

---

### 3. `landing-ecommerce.html`

**Use case:** Product landing page untuk satu produk fisik/digital dengan alur pesan via WhatsApp.

**Cocok untuk:** UMKM, brand produk, dropshipper, artisan seller.

**Fitur unggulan:**
- Hero produk dengan gambar fullscreen
- Benefit list + trust badges (BPOM, dll.)
- Varian produk + pricing
- Tombol CTA "Pesan via WhatsApp"
- FAQ accordion

**CSS:** `assets/css/output-ecommerce.css`
**Build script:** `npm run build:ecommerce`

---

### 4. `landing-portfolio.html`

**Use case:** Portfolio hasil kerja / case study page untuk membuktikan track record ke calon client.

**Cocok untuk:** Agency, freelancer desainer/developer, konsultan marketing.

**Fitur unggulan:**
- Case study cards dengan metrics nyata (ROI, leads, revenue)
- Dark-to-light scroll experience
- Stats section dengan angka besar
- CTA konsultasi di bawah

**CSS:** `assets/css/output-portfolio.css`
**Build script:** `npm run build:portfolio`

---

### 5. `landing-webinar.html`

**Use case:** Halaman registrasi event online / webinar dengan countdown ke waktu acara.

**Cocok untuk:** Webinar, online class, live session, peluncuran produk.

**Fitur unggulan:**
- Countdown timer ke tanggal event
- Form registrasi + notifikasi WhatsApp otomatis
- Speaker profile section
- FAQ accordion
- Dark teal theme profesional

**CSS:** `assets/css/output-webinar.css`
**Build script:** `npm run build:webinar`

---

### 6. `landing-comingsoon.html`

**Use case:** Halaman placeholder saat produk/website belum diluncurkan.

**Cocok untuk:** Pre-launch produk, coming soon website, waitlist builder.

**Fitur unggulan:**
- Countdown timer ke tanggal launch
- Form capture email early bird
- Animasi latar belakang subtle
- Futuristic theme (Exo 2 font)

**CSS:** `assets/css/output-comingsoon.css`
**Build script:** `npm run build:comingsoon`

---

### 7. `landing-thankyou.html`

**Use case:** Halaman konfirmasi setelah form disubmit — menjaga engagement setelah konversi.

**Cocok untuk:** Dipasang sebagai redirect URL setelah lead form, pembelian, atau registrasi.

**Fitur unggulan:**
- Animasi checkmark sukses
- Pesan konfirmasi yang hangat
- CTA lanjutan (ikut grup WA, follow IG, dll.)
- Next steps yang jelas

**CSS:** `assets/css/output-thankyou.css`
**Build script:** `npm run build:thankyou`

---

### 8. `landing-notfound.html`

**Use case:** Halaman 404 custom yang tetap on-brand dan membantu user menemukan jalan pulang.

**Cocok untuk:** Semua project — replace default 404 halaman hosting.

**Fitur unggulan:**
- Ilustrasi 404 ekspresif (bold font Bebas Neue)
- Tombol kembali ke beranda
- Pesan error yang friendly dan tidak menggurui

**CSS:** `assets/css/output-notfound.css`
**Build script:** `npm run build:notfound`

---

### 9. `landing-sablanding.html`

**Use case:** Landing page resmi SAB Agency — bisa dijadikan referensi template agency terlengkap.

**Cocok untuk:** Dijadikan base template untuk agency baru atau company profile digital.

**Fitur unggulan:**
- Navbar + hero split (copy kiri, visual kanan)
- Services section
- Stats counter
- Testimonials carousel
- Pricing table 3-kolom
- CTA form + footer lengkap
- WhatsApp float button

**CSS:** `assets/css/output-sablanding.css`
**Build script:** `npm run build:sablanding`

---

### 10. `landing-dapurswindon.html`

**Use case:** Landing page produk food & beverage homemade — contoh real client deployment.

**Cocok untuk:** UMKM kuliner, catering, artisan food brand, hampers.

**Fitur unggulan:**
- Warm artisan aesthetic (Playfair Display + Cormorant Garamond)
- Product showcase brownies dengan foto
- Varian & harga
- Pesan via WhatsApp
- Brown + cream + gold color palette

**CSS:** `assets/css/output-dapurswindon.css`
**Build script:** `npm run build:dapurswindon`

---

### 11. `landing.html`

**Use case:** Template generik / base template kosong yang bisa dipakai sebagai starting point baru.

**Cocok untuk:** Project baru yang belum punya kategori spesifik.

**CSS:** `assets/css/output.css`
**Build script:** `npm run build`

---

## Cara Deploy Template Baru untuk Client

Ikuti langkah-langkah ini setiap kali hendak men-deploy template untuk client baru.

### Langkah 1 — Clone & siapkan project

```bash
git clone https://github.com/abdulchalik/sab-conversion-kit.git nama-project-client
cd nama-project-client
npm install
```

### Langkah 2 — Pilih template yang sesuai

Salin template yang paling mendekati kebutuhan client:

```bash
# Contoh: gunakan template ecommerce untuk client produk fisik
cp templates/landing-ecommerce.html templates/landing-namaklien.html
```

Buat file CSS input untuk template baru:

```bash
cp assets/css/main-ecommerce.css assets/css/main-namaklien.css
```

### Langkah 3 — Tambahkan script build di `package.json`

Buka `package.json` dan tambahkan dua baris baru di bagian `"scripts"`:

```json
"dev:namaklien": "tailwindcss -i ./assets/css/main-namaklien.css -o ./assets/css/output-namaklien.css --watch",
"build:namaklien": "tailwindcss -i ./assets/css/main-namaklien.css -o ./assets/css/output-namaklien.css --minify"
```

Pastikan referensi CSS di dalam file HTML template sudah diupdate:

```html
<!-- Di dalam <head> template baru -->
<link rel="stylesheet" href="../assets/css/output-namaklien.css" />
```

### Langkah 4 — Jalankan development mode

```bash
npm run dev:namaklien
```

Buka file HTML langsung di browser untuk preview. Tailwind akan otomatis merecompile CSS setiap kali ada perubahan.

### Langkah 5 — Isi konten client

Edit file HTML dan ganti semua placeholder:

| Placeholder | Ganti dengan |
|---|---|
| Nama brand / judul halaman | Nama client |
| Nomor WhatsApp (`WA_NUMBER`) | Nomor WA client |
| Headline & subheadline | Copywriting sesuai brief |
| Gambar produk | Aset client |
| Harga & paket | Info pricing client |
| Nomor & statistik | Data real client |

### Langkah 6 — Build untuk production

```bash
npm run build:namaklien
```

File output yang dihasilkan: `assets/css/output-namaklien.css` (sudah diminify).

### Langkah 7 — Deploy ke Vercel

```bash
vercel --prod
```

Atau push ke GitHub dan hubungkan repo ke Vercel dashboard untuk auto-deploy. File `vercel.json` sudah tersedia di root project.

---

## Cara Customize Template

### Ganti Warna

Semua warna template didefinisikan di `tailwind.config.js`. Setiap template punya namespace warnanya sendiri.

**Contoh: mengubah warna utama template ecommerce**

Buka `tailwind.config.js`, temukan bagian `ecommerce`:

```js
ecommerce: {
  primary:   "#1D4ED8",  // ← ganti ke warna brand client
  secondary: "#3B82F6",  // ← accent / hover
  accent:    "#F97316",  // ← CTA button / highlight
  light:     "#EFF6FF",  // ← background section terang
  dark:      "#1E3A5F"   // ← teks gelap / footer bg
},
```

Setelah mengubah nilai hex, jalankan ulang:

```bash
npm run build:ecommerce
```

Tailwind akan regenerate semua utility class dengan warna baru.

> **Tips:** Gunakan tool seperti [coolors.co](https://coolors.co) atau [paletton.com](https://paletton.com) untuk generate color palette yang harmonis dari warna utama brand client.

---

### Ganti Font

Font per-template juga didefinisikan di `tailwind.config.js` bagian `fontFamily`.

**Contoh: mengubah font template webinar**

```js
"webinar-heading": ["Raleway", "sans-serif"],   // ← ganti nama font
"webinar-body":    ["Open Sans", "sans-serif"],  // ← ganti nama font
```

Kemudian update juga link Google Fonts di dalam `<head>` file HTML:

```html
<!-- Ganti URL ini dengan font yang baru dipilih -->
<link href="https://fonts.googleapis.com/css2?family=NamaFont:wght@400;700&display=swap" rel="stylesheet" />
```

---

### Ganti Teks

Semua teks ada langsung di dalam file HTML. Cari dan ganti:

- **Headline utama** — biasanya berada di dalam `<h1>` atau tag dengan class `text-4xl`, `text-5xl`, dsb.
- **Subheadline** — tag `<p>` dengan class `text-lg` atau `text-xl`
- **CTA button** — cari `<a>` atau `<button>` yang berisi teks seperti "Daftar Sekarang" atau "Hubungi Kami"
- **Meta title & description** — di bagian `<head>`, tag `<title>` dan `<meta name="description">`

---

### Ganti Gambar

Semua gambar template menggunakan **Unsplash** sebagai placeholder via URL langsung. Untuk menggantinya:

1. Upload foto client ke folder `assets/images/`
2. Temukan tag `<img>` atau properti CSS `background-image` yang memakai URL Unsplash
3. Ganti URL dengan path lokal:

```html
<!-- Sebelum -->
<img src="https://images.unsplash.com/photo-xxx" alt="..." />

<!-- Sesudah -->
<img src="../assets/images/produk-client.jpg" alt="Nama Produk Client" />
```

> **Tips:** Kompres gambar sebelum upload menggunakan [squoosh.app](https://squoosh.app) untuk menjaga performa halaman.

---

### Ganti Nomor WhatsApp

Hampir semua template menggunakan WhatsApp sebagai channel konversi. Cari variabel `WA_NUMBER` atau URL `wa.me` di file HTML:

```html
<!-- Cari baris seperti ini -->
<a href="https://wa.me/6282177336889?text=Halo..." ...>

<!-- Ganti nomor setelah wa.me/ -->
<a href="https://wa.me/628XXXXXXXXXX?text=Halo%20..." ...>
```

Format nomor: `628` + nomor tanpa angka 0 di depan. Contoh: `08123456789` → `628123456789`.

---

## Daftar Reusable Components

Semua komponen ada di folder `components/` dan bisa dibuka langsung di browser untuk preview. Lihat `components/index.html` untuk galeri lengkap.

---

### `navbar.html`

**Deskripsi:** Navigation bar fixed dengan scroll-aware background (transparan → solid saat scroll) dan tombol CTA WhatsApp.

**Cara pakai:**
1. Salin seluruh blok `<nav>` dari file ini
2. Tempel di bagian paling atas `<body>` halaman target
3. Sertakan juga blok `<style>` CSS-nya ke dalam `<head>`
4. Sertakan blok `<script>` scroll detection-nya sebelum `</body>`

**Customisasi:**
- Ubah `--color-primary` dan `--color-secondary` di blok `:root`
- Ganti item navigasi di dalam `<ul>`
- Update nomor WA di tombol CTA

---

### `hero-split.html`

**Deskripsi:** Hero section 2-kolom — teks copywriting di kiri, visual/kartu statistik di kanan. Light theme.

**Cara pakai:**
1. Salin blok `<section class="hero-section">` beserta CSS-nya
2. Tempel setelah navbar
3. Ganti headline, subheadline, dan badge-badge kecil

**Customisasi:** Ubah `--color-primary` dan isi konten teks/visual sesuai brand.

---

### `hero-parallax.html`

**Deskripsi:** Hero fullscreen dengan efek parallax scroll. Dark theme, cocok untuk agency dan produk premium.

**Cara pakai:**
1. Salin `<section id="hero">` + CSS + script parallax
2. Tempel setelah navbar
3. Ganti headline dan metrics strip (angka-angka di bawah)

---

### `countdown-timer.html`

**Deskripsi:** Countdown timer dengan blok digit besar. Menghitung mundur ke tanggal/waktu target.

**Cara pakai:**
1. Salin seluruh blok countdown beserta `<script>`-nya
2. Ubah nilai `COUNTDOWN_TARGET` ke tanggal event client:

```js
const COUNTDOWN_TARGET = new Date("2026-12-31T23:59:59");
```

---

### `form-lead-capture.html`

**Deskripsi:** Form konversi 2-kolom — benefit list di kiri, form card di kanan. Submit langsung membuka WhatsApp dengan data form terisi otomatis.

**Cara pakai:**
1. Salin blok form + CSS + script WhatsApp
2. Update `WA_NUMBER` di dalam script:

```js
const WA_NUMBER = "628XXXXXXXXXX";
```

3. Sesuaikan field form dan benefit list dengan kebutuhan client

---

### `cta-section.html`

**Deskripsi:** Section CTA dengan background solid warna primary, heading persuasif, dan form mini + tombol WhatsApp.

**Cara pakai:** Salin blok `<section class="cta-section">` dan tempel di bagian bawah halaman, sebelum footer.

---

### `faq-accordion.html`

**Deskripsi:** Accordion expand/collapse untuk FAQ. Konten diatur via array JavaScript, tidak perlu edit HTML.

**Cara pakai:**
1. Salin blok accordion + CSS + script
2. Edit array `FAQ_ITEMS` di bagian `<script>`:

```js
const FAQ_ITEMS = [
  { q: "Pertanyaan pertama?", a: "Jawaban pertama." },
  { q: "Pertanyaan kedua?",   a: "Jawaban kedua."   },
  // tambah item sesuai kebutuhan
];
```

---

### `pricing-table.html`

**Deskripsi:** Tabel harga 3-kolom (Starter / Pro / Enterprise) dengan highlight pada paket tengah. Konten diatur via array.

**Cara pakai:**
1. Salin blok pricing + CSS + script
2. Edit array `PLANS` di `<script>`:

```js
const PLANS = [
  {
    name: "Starter",
    price: "500K",
    period: "/bulan",
    featured: false,
    features: ["Fitur A", "Fitur B", "Fitur C"],
    cta: "Mulai Gratis"
  },
  // ...
];
```

---

### `stats-counter.html`

**Deskripsi:** Strip statistik dengan angka count-up saat masuk viewport. Background warna primary solid.

**Cara pakai:**
1. Salin blok stats + CSS + script
2. Edit array `stats` di `<script>`:

```js
const stats = [
  { value: 500,  suffix: "+", label: "Client Puas"    },
  { value: 98,   suffix: "%", label: "Tingkat Retensi" },
  { value: 3.8,  suffix: "×", label: "Rata-rata ROI"  },
];
```

---

### `testimonials-carousel.html`

**Deskripsi:** Carousel testimoni dengan autoplay, dots navigasi, dan swipe support. Konten via array.

**Cara pakai:**
1. Salin blok carousel + CSS + script
2. Edit array `TESTIMONIALS` di `<script>`:

```js
const TESTIMONIALS = [
  {
    name:    "Nama Client",
    role:    "CEO, Nama Perusahaan",
    avatar:  "https://i.pravatar.cc/80?u=1",
    rating:  5,
    text:    "Testimoni client di sini..."
  },
  // ...
];
```

---

### `whatsapp-float.html`

**Deskripsi:** Tombol WhatsApp mengambang (fixed bottom-right) yang membuka chat langsung ke nomor yang ditentukan.

**Cara pakai:**
1. Salin tag `<a class="wa-float">` dan CSS `.wa-float`
2. Tempel elemen `<a>` langsung di dalam `<body>` halaman, di mana saja
3. Ganti nomor dan pesan:

```html
<a href="https://wa.me/628XXXXXXXXXX?text=Halo%2C%20saya%20tertarik..."
   class="wa-float" target="_blank" rel="noopener">
```

---

### `footer.html`

**Deskripsi:** Footer lengkap dengan kolom navigasi, kolom layanan, kolom kontak, dan baris copyright.

**Cara pakai:**
1. Salin blok `<footer>` + CSS
2. Tempel di paling bawah `<body>` sebelum `</body>`
3. Update link navigasi, nomor kontak, dan tahun copyright

---

### `buttons.html`

**Deskripsi:** Kumpulan variasi button (primary, secondary, outline, ghost, icon) siap pakai.

**Cara pakai:** Salin class Tailwind dari tombol yang diinginkan langsung ke project.

---

## Tips Umum

- **Urutan build:** Selalu jalankan `npm run build:[template]` setelah selesai editing sebelum deploy. Jangan deploy dengan CSS yang belum dicompile ulang.
- **Cek mobile:** Semua template sudah responsive. Selalu test di ukuran 375px (iPhone SE) dan 768px (tablet) sebelum diserahkan ke client.
- **WhatsApp link:** Encode spasi dan karakter khusus di pesan WA menggunakan `encodeURIComponent()` atau ganti manual: spasi = `%20`, baris baru = `%0A`.
- **Meta tags:** Jangan lupa update `<title>`, `<meta name="description">`, dan Open Graph tags sesuai konten client — ini penting untuk SEO dan sharing di media sosial.
- **Font loading:** Semua template sudah menggunakan `font-display: swap` atau non-blocking font load untuk performa optimal.
