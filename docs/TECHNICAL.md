# SAB Conversion Kit — Technical Documentation

> Versi: 1.0.0 · Terakhir diperbarui: April 2026

---

## Daftar Isi

1. [Setup Guide](#setup-guide)
2. [Deployment Guide (GitHub → Vercel)](#deployment-guide)
3. [Component API Reference](#component-api-reference)
4. [Folder Structure](#folder-structure)
5. [Troubleshooting](#troubleshooting)

---

## Setup Guide

### Prerequisites

Pastikan tools berikut sudah terinstall di mesin lokal:

- **Node.js** v16+ (disarankan v18 LTS atau lebih baru)
- **npm** v8+ (bundled dengan Node.js)
- **Git** v2+
- **Code editor** — VS Code direkomendasikan (dengan extension Tailwind CSS IntelliSense)

### Clone Repository

```bash
git clone https://github.com/abdulchalik/sab-conversion-kit.git
cd sab-conversion-kit
```

### Install Dependencies

```bash
npm install
```

Ini akan menginstall tiga devDependency utama:

- `tailwindcss` v3.4.14 — utility-first CSS framework
- `postcss` v8.5.8 — CSS transformation pipeline
- `autoprefixer` v10.4.27 — vendor prefix otomatis

### Run Locally (Development Mode)

Setiap template punya script `dev` sendiri yang menjalankan Tailwind CLI dalam watch mode. Pilih template yang sedang dikerjakan:

```bash
# Template utama / lead capture
npm run dev

# Template spesifik
npm run dev:sablanding
npm run dev:service
npm run dev:ecommerce
npm run dev:portfolio
npm run dev:webinar
npm run dev:comingsoon
npm run dev:thankyou
npm run dev:notfound
npm run dev:dapurswindon
```

Kemudian buka file HTML template langsung di browser. Tailwind akan otomatis merecompile CSS setiap kali ada perubahan di file HTML atau config.

### Build untuk Production

```bash
# Build template tertentu (output CSS di-minify)
npm run build:sablanding

# Build template utama
npm run build
```

Output: file `assets/css/output-[nama].css` yang sudah diminify dan siap deploy.

### Daftar Lengkap npm Scripts

| Script | Input CSS | Output CSS |
|---|---|---|
| `dev` / `build` | `main.css` | `output.css` |
| `dev:service` / `build:service` | `main-service.css` | `output-service.css` |
| `dev:ecommerce` / `build:ecommerce` | `main-ecommerce.css` | `output-ecommerce.css` |
| `dev:portfolio` / `build:portfolio` | `main-portfolio.css` | `output-portfolio.css` |
| `dev:webinar` / `build:webinar` | `main-webinar.css` | `output-webinar.css` |
| `dev:comingsoon` / `build:comingsoon` | `main-comingsoon.css` | `output-comingsoon.css` |
| `dev:thankyou` / `build:thankyou` | `main-thankyou.css` | `output-thankyou.css` |
| `dev:notfound` / `build:notfound` | `main-notfound.css` | `output-notfound.css` |
| `dev:dapurswindon` / `build:dapurswindon` | `main-dapurswindon.css` | `output-dapurswindon.css` |
| `dev:sablanding` / `build:sablanding` | `main-sablanding.css` | `output-sablanding.css` |

### Menambah Template Baru untuk Client

```bash
# 1. Salin template terdekat sebagai base
cp templates/landing-ecommerce.html templates/landing-namaklien.html

# 2. Salin file CSS input
cp assets/css/main-ecommerce.css assets/css/main-namaklien.css

# 3. Update referensi CSS di file HTML baru
#    Ganti: <link rel="stylesheet" href="../assets/css/output-ecommerce.css" />
#    Jadi:  <link rel="stylesheet" href="../assets/css/output-namaklien.css" />

# 4. Tambahkan script di package.json → "scripts":
#    "dev:namaklien": "tailwindcss -i ./assets/css/main-namaklien.css -o ./assets/css/output-namaklien.css --watch"
#    "build:namaklien": "tailwindcss -i ./assets/css/main-namaklien.css -o ./assets/css/output-namaklien.css --minify"

# 5. (Opsional) Tambah color theme di tailwind.config.js
#    dan font family jika brand client butuh tipografi khusus

# 6. Run development mode
npm run dev:namaklien
```

---

## Deployment Guide

### Deploy dari GitHub ke Vercel — Step by Step

#### Step 1: Pastikan repo sudah di GitHub

```bash
# Jika belum ada remote
git remote add origin https://github.com/abdulchalik/sab-conversion-kit.git

# Push semua perubahan
git add .
git commit -m "Ready for deployment"
git push origin main
```

#### Step 2: Connect ke Vercel

1. Buka [vercel.com](https://vercel.com) dan login (atau daftar dengan akun GitHub)
2. Klik **"Add New Project"**
3. Pilih repository **sab-conversion-kit** dari daftar GitHub repos
4. Vercel akan otomatis detect konfigurasi dari `vercel.json`

#### Step 3: Konfigurasi Build Settings

Vercel akan membaca `vercel.json` yang sudah ada di root project:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".",
  "rewrites": [
    { "source": "/", "destination": "/templates/landing.html" },
    { "source": "/service", "destination": "/templates/landing-service.html" },
    { "source": "/lead-capture", "destination": "/templates/landing-lead-capture.html" }
  ]
}
```

Penjelasan konfigurasi:

- **buildCommand** — menjalankan `npm run build` yang meng-compile CSS template utama. Jika ingin build semua template sekaligus, ubah menjadi script gabungan (lihat tips di bawah).
- **outputDirectory** — `.` artinya root project langsung menjadi folder output (karena ini bukan SPA/framework, tapi static HTML).
- **rewrites** — mapping URL bersih ke file template. Contoh: pengunjung yang akses `/service` akan dilayani file `landing-service.html`.

#### Step 4: Deploy

Klik **"Deploy"** di Vercel dashboard. Proses deploy biasanya selesai dalam 30-60 detik.

#### Step 5: Custom Domain (Opsional)

1. Di Vercel dashboard, buka **Settings → Domains**
2. Tambahkan domain client, misalnya `landing.namaklien.com`
3. Update DNS di registrar domain: tambahkan CNAME record yang mengarah ke `cname.vercel-dns.com`
4. Vercel akan otomatis provision SSL certificate

#### Step 6: Auto-Deploy

Setelah connected, setiap `git push` ke branch `main` akan otomatis trigger deploy baru di Vercel. Tidak perlu manual deploy lagi.

#### Tips: Build Semua Template Sekaligus

Jika deploy membutuhkan semua template ter-build, tambahkan script `build:all` di `package.json`:

```json
"build:all": "npm run build && npm run build:service && npm run build:ecommerce && npm run build:portfolio && npm run build:webinar && npm run build:comingsoon && npm run build:thankyou && npm run build:notfound && npm run build:dapurswindon && npm run build:sablanding"
```

Kemudian update `vercel.json`:

```json
"buildCommand": "npm run build:all"
```

#### Tips: Menambah Route Baru di Vercel

Untuk setiap template baru yang perlu URL bersih, tambahkan entry di array `rewrites`:

```json
{ "source": "/namaklien", "destination": "/templates/landing-namaklien.html" }
```

#### Deploy via CLI (Alternatif)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Preview deploy (staging)
vercel

# Production deploy
vercel --prod
```

---

## Component API Reference

Semua komponen terletak di folder `components/`. Setiap komponen adalah file HTML mandiri yang terdiri dari tiga bagian: HTML structure, `<style>` block dengan CSS variables, dan `<script>` block dengan konfigurasi JavaScript.

### CSS Variables (Berlaku untuk Semua Komponen)

Setiap komponen menggunakan CSS variables di `:root` yang bisa di-override:

```css
:root {
  --color-primary:    #234292;   /* Warna utama — CTA, heading, navbar */
  --color-secondary:  #03C383;   /* Warna aksen — badge, highlight */
  --color-action:     #1E90FF;   /* Tombol sekunder, link */
  --color-dark:       #0D1B3E;   /* Background gelap, footer */
  --color-light:      #F4F7FF;   /* Background terang, section */
  --color-text:       #3D4F6E;   /* Body text */
  --color-text-light: #6B7DA0;   /* Muted text */
  --color-border:     #E4EBF5;   /* Border, divider */
  --color-bg:         #F4F7FF;   /* Page background */
  --color-wa:         #25D366;   /* WhatsApp green */
}
```

### Animation Classes (dari CSS Input Files)

Tersedia di semua template melalui file `main-*.css`:

| Class | Efek | Penggunaan |
|---|---|---|
| `anim-fade` | Fade in + translate Y(28px) | Elemen yang muncul saat scroll |
| `anim-left` | Slide in dari kiri (-44px) | Konten kolom kiri |
| `anim-right` | Slide in dari kanan (44px) | Konten kolom kanan |
| `anim-up` | Slide up (36px) | Cards, list items |
| `anim-scale` | Scale dari 0.9 + fade in | Hero cards, visual elements |
| `anim-in` | Trigger state — remove transform | Ditambahkan via IntersectionObserver |
| `d-100` s/d `d-800` | Delay 100ms s/d 800ms | Staggered animation per item |

Animasi di-trigger via JavaScript IntersectionObserver pattern:

```javascript
const obs = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('anim-in'); obs.unobserve(e.target); }
  }),
  { threshold: 0.08 }
);
document.querySelectorAll('.anim-fade, .anim-left, .anim-right, .anim-up, .anim-scale')
  .forEach(el => obs.observe(el));
```

---

### navbar.html

Navigation bar fixed di atas halaman dengan scroll-aware background transition.

**CSS Variables:**

| Variable | Default | Deskripsi |
|---|---|---|
| `--color-primary` | `#234292` | Warna logo, link hover, CTA |
| `--color-secondary` | `#03C383` | Gradient underline aksen |
| `--color-text` | `#3D4F6E` | Warna teks nav-link |
| `--color-wa` | `#25D366` | Background tombol WA |

**HTML Classes yang bisa di-customize:**

| Class | Elemen | Fungsi |
|---|---|---|
| `#navbar` | `<nav>` | Container utama, jadi `.scrolled` saat scroll > 60px |
| `.nav-link` | `<a>` | Item navigasi dengan hover underline gradient |
| `.mobile-menu` | `<div>` | Menu mobile, toggle class `.open` |
| `#menuBtn` | `<button>` | Hamburger button, toggle class `.open` |

**JavaScript API:**

```javascript
// Scroll detection — otomatis toggle class .scrolled
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile menu toggle
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  menuBtn.classList.toggle('open');
});
```

---

### hero-split.html

Hero section 2-kolom — copywriting di kiri, visual card di kanan. Light theme.

**CSS Variables:** Sama dengan navbar (menggunakan `--color-primary` dan `--color-secondary`).

**Customizable Elements:**

| Elemen | Cara Customize |
|---|---|
| Section label badge | Ubah teks di `<span>` dengan class `section-label` |
| Headline | Edit `<h1>` — support gradient text via class `grad-text-blue` atau `grad-text-green` |
| Subheadline | Edit `<p>` di bawah h1 |
| Trust badges | Edit list `<span>` di dalam flex container |
| Visual card (kanan) | Edit statistik: angka leads, conversion rate, ROI |
| CTA buttons | `btn-primary`, `btn-outline-blue` — ubah teks dan href |

**Animation Classes:** `float-anim`, `float-anim-2` — animasi naik-turun otomatis pada visual card.

---

### hero-parallax.html

Hero fullscreen dengan dark theme dan efek parallax saat mouse bergerak.

**Customizable Elements:**

| Elemen | Cara Customize |
|---|---|
| Background blobs | Edit ukuran dan posisi `.hero-blob-1`, `.hero-blob-2` |
| Headline | Edit `<h1>` — gradient text via `grad-text-mixed` |
| Metrics strip | Edit angka-angka statistik di bagian bawah hero |
| Parallax speed | Atur `data-parallax-speed` attribute pada elemen |

**JavaScript API — Parallax Effect:**

```javascript
document.addEventListener('mousemove', e => {
  const layers = document.querySelectorAll('[data-parallax-speed]');
  layers.forEach(layer => {
    const speed = parseFloat(layer.dataset.parallaxSpeed);
    const x = (e.clientX - window.innerWidth / 2) * speed;
    const y = (e.clientY - window.innerHeight / 2) * speed;
    layer.style.transform = `translate(${x}px, ${y}px)`;
  });
});
```

---

### form-lead-capture.html

Form konversi 2-kolom dengan submit ke WhatsApp.

**CSS Variables:**

| Variable | Default | Deskripsi |
|---|---|---|
| `--color-primary` | `#234292` | Background kolom kiri, focus ring |
| `--color-secondary` | `#03C383` | Badge, accent |

**JavaScript Configuration:**

```javascript
// Nomor WhatsApp target
const WA_NUMBER = "6282177336889";

// Validation rules
const RULES = {
  nama:  { required: true, min: 2 },
  email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  wa:    { required: true, pattern: /^(08|628)\d{8,12}$/ }
};
```

**Customizable Parameters:**

| Parameter | Tipe | Deskripsi |
|---|---|---|
| `WA_NUMBER` | `string` | Nomor WhatsApp tujuan (format: `628xxx`) |
| `RULES` | `object` | Rules validasi per field — `required`, `min`, `pattern` |
| Benefit list | HTML | List item di kolom kiri (ubah langsung di HTML) |
| Form fields | HTML | Tambah/kurangi field di dalam `<form>` |

**CSS States:**

| Class | Fungsi |
|---|---|
| `.field-ok` | Border hijau — validasi berhasil |
| `.field-err` | Border merah — validasi gagal |
| `.err-msg` | Pesan error (hidden default) |
| `.err-msg.show` | Pesan error ditampilkan |

---

### cta-section.html

Section CTA dengan form mini dan info kontak.

**Customizable Elements:**

| Elemen | Cara Customize |
|---|---|
| Headline & subheadline | Edit teks persuasif di kolom kiri |
| Info kontak | Ubah nomor WA, email, dan alamat |
| Service dropdown | Edit `<option>` di dalam `<select>` |
| Submit action | Ubah `WA_NUMBER` dan format pesan WA |

**CSS Classes:** `cta-input` (form input styling), `btn-primary` / `btn-secondary` / `btn-wa` (button variants).

---

### pricing-table.html

Tabel harga 3-kolom dengan konfigurasi via JavaScript array.

**JavaScript Configuration:**

```javascript
const PLANS = [
  {
    name: "Starter",         // Nama paket
    price: "2.5jt",          // Harga display
    period: "/bulan",        // Periode billing
    featured: false,         // true = highlight card (tengah)
    badge: "",               // Teks badge (hanya untuk featured)
    features: [
      { text: "5 Landing Pages", included: true },
      { text: "A/B Testing", included: false }
    ],
    cta: "Mulai Sekarang",   // Teks tombol CTA
    ctaLink: "#"             // URL atau wa.me link
  },
  // ... tambah paket lain
];
```

**CSS Classes:**

| Class | Fungsi |
|---|---|
| `.pricing-card` | Card container — hover lift effect |
| `.pricing-card.featured` | Highlight card — scale 1.03, blue border |
| `.pricing-badge` | Badge "Paling Populer" di atas card |
| `.price-amount` | Angka harga besar |
| `.feature-item` | Baris fitur |
| `.feature-item.dimmed` | Fitur tidak termasuk (opacity rendah) |
| `.feature-check` | Icon cek hijau |
| `.feature-cross` | Icon silang abu-abu |
| `.btn-pricing-primary` | CTA button featured card |
| `.btn-pricing-outline` | CTA button non-featured card |

---

### testimonials-carousel.html

Carousel testimoni dengan autoplay dan navigasi dots.

**JavaScript Configuration:**

```javascript
const TESTIMONIALS = [
  {
    name: "Nama Client",
    role: "CEO, Nama Perusahaan",
    avatar: "https://i.pravatar.cc/80?u=1",  // URL avatar atau inisial
    rating: 5,                                 // 1-5 bintang
    text: "Isi testimoni client..."
  },
  // ... tambah testimoni lain
];

// Autoplay config
const AUTOPLAY_INTERVAL = 5000;  // ms — interval ganti slide
```

**CSS Classes:**

| Class | Fungsi |
|---|---|
| `.testi-viewport` | Viewport container (overflow hidden) |
| `.testi-track` | Track yang bergeser (transform translateX) |
| `.testi-slide` | Slide individual (min-width: 100%) |
| `.testi-card` | Card testimoni — quote mark decorative |
| `.testi-avatar-ring` | Avatar bulat dengan ring border |
| `.testi-stars` | Bintang rating (warna kuning) |
| `.testi-dot` / `.testi-dot.active` | Dot navigasi |
| `.testi-nav-btn` | Tombol prev/next |

---

### faq-accordion.html

FAQ dengan expand/collapse animasi. Konten dikonfigurasi via JavaScript array.

**JavaScript Configuration:**

```javascript
const FAQ_ITEMS = [
  {
    q: "Pertanyaan yang sering ditanyakan?",
    a: "Jawaban lengkap di sini. Bisa berisi HTML jika diperlukan."
  },
  // ... tambah FAQ lain
];
```

**CSS Classes:**

| Class | Fungsi |
|---|---|
| `.faq-item` | Container FAQ — border card |
| `.faq-item.open` | State terbuka — highlight border |
| `.faq-question` | Header yang bisa diklik |
| `.faq-answer` | Body jawaban (max-height animation) |

**Animation:** Chevron icon rotate 180deg saat open. Body expand via `max-height` transition.

---

### stats-counter.html

Strip statistik dengan angka count-up animasi.

**JavaScript Configuration:**

```javascript
const STATS = [
  { value: 500,  suffix: "+", label: "Client Puas" },
  { value: 98,   suffix: "%", label: "Tingkat Retensi" },
  { value: 3.8,  suffix: "×", label: "Rata-rata ROI" },
  { value: 10,   suffix: "+", label: "Tahun Pengalaman" }
];
```

**CSS Classes:** `.stat-item` (container), `.stat-number` (angka besar gradient).

**Animation:** Count-up triggered via IntersectionObserver. Angka naik dari 0 ke target value dengan durasi ~2 detik. Mendukung integer dan float.

---

### countdown-timer.html

Timer countdown ke tanggal target.

**JavaScript Configuration:**

```javascript
const COUNTDOWN_TARGET = new Date("2026-12-31T23:59:59");
```

**CSS Classes:** `.cd-digit` (kotak digit — dark background, gold text).

**Behavior:** Menampilkan Hari / Jam / Menit / Detik. Flip animation saat digit berubah. Saat expired, menampilkan "00" di semua digit atau pesan custom.

---

### whatsapp-float.html

Tombol WhatsApp mengambang (fixed bottom-right).

**Customizable Parameters:**

```html
<a href="https://wa.me/628XXXXXXXXXX?text=Halo%2C%20saya%20tertarik..."
   class="wa-float" target="_blank" rel="noopener">
```

| Parameter | Deskripsi |
|---|---|
| `628XXXXXXXXXX` | Nomor WhatsApp tujuan |
| `text=` | Pesan pre-filled (URL-encoded) |

**CSS:** `.wa-float` — fixed position, green circle 56x56px, pulse ring animation (`wa-ring` keyframes), hover scale 1.12.

---

### footer.html

Footer 4-kolom dengan navigasi, layanan, dan social icons.

**Customizable Elements:**

| Elemen | Cara Customize |
|---|---|
| Logo & deskripsi | Kolom pertama — edit nama brand dan tagline |
| Link navigasi | Kolom kedua — edit `<a>` items |
| Link layanan | Kolom ketiga — edit `<a>` items |
| Info kontak | Kolom keempat — nomor WA, email, alamat |
| Social icons | Edit href Instagram, LinkedIn, Facebook |
| Copyright | Tahun auto-update via JavaScript `new Date().getFullYear()` |

**CSS Classes:** `.footer-link` (link styling), `.social-icon` (icon container dengan hover effect).

---

### buttons.html

Koleksi variasi button. Referensi class yang tersedia:

| Class | Style |
|---|---|
| `btn-primary` | Gradient blue, white text, hover lift |
| `btn-secondary` | Gradient green, white text, hover lift |
| `btn-outline-blue` | Transparent, blue border, hover fill |
| `btn-wa` | WhatsApp green, white text, hover lift |
| `btn-lift` | Generic hover lift effect (add to any button) |
| `btn-pricing-primary` | Full-width blue gradient (untuk pricing card) |
| `btn-pricing-outline` | Full-width blue outline (untuk pricing card) |

---

## Folder Structure

```
sab-conversion-kit/
│
├── templates/                          # Landing pages lengkap siap deploy
│   ├── landing.html                    # Base / generic template
│   ├── landing-lead-capture.html       # Lead capture dengan urgency bar
│   ├── landing-service.html            # Agency / company profile
│   ├── landing-ecommerce.html          # Product landing (WA checkout)
│   ├── landing-portfolio.html          # Case study & portfolio
│   ├── landing-webinar.html            # Event registration + countdown
│   ├── landing-comingsoon.html         # Pre-launch placeholder
│   ├── landing-thankyou.html           # Post-conversion thank you
│   ├── landing-notfound.html           # Custom 404
│   ├── landing-sablanding.html         # SAB Agency showcase (full reference)
│   └── landing-dapurswindon.html       # Real client: food & beverage brand
│
├── components/                         # UI blocks reusable (standalone preview)
│   ├── index.html                      # Galeri komponen — buka di browser
│   ├── navbar.html                     # Fixed navbar + mobile menu
│   ├── hero-split.html                 # 2-column hero (copy + visual)
│   ├── hero-parallax.html              # Fullscreen dark hero + parallax
│   ├── form-lead-capture.html          # Lead form → WhatsApp submit
│   ├── cta-section.html                # CTA strip + contact form
│   ├── pricing-table.html              # 3-column pricing cards
│   ├── testimonials-carousel.html      # Autoplay testimonial slider
│   ├── faq-accordion.html              # Expand/collapse FAQ
│   ├── stats-counter.html              # Animated count-up numbers
│   ├── countdown-timer.html            # Event countdown digits
│   ├── whatsapp-float.html             # Floating WA button
│   ├── footer.html                     # 4-column footer
│   └── buttons.html                    # Button variants collection
│
├── assets/
│   ├── css/
│   │   ├── main.css                    # CSS input: base template
│   │   ├── main-service.css            # CSS input: service template
│   │   ├── main-ecommerce.css          # CSS input: ecommerce template
│   │   ├── main-portfolio.css          # CSS input: portfolio template
│   │   ├── main-webinar.css            # CSS input: webinar template
│   │   ├── main-comingsoon.css         # CSS input: coming soon template
│   │   ├── main-thankyou.css           # CSS input: thank you template
│   │   ├── main-notfound.css           # CSS input: 404 template
│   │   ├── main-dapurswindon.css       # CSS input: Dapur Swindon client
│   │   ├── main-sablanding.css         # CSS input: SAB Agency landing
│   │   ├── output.css                  # Compiled: base template
│   │   ├── output-service.css          # Compiled: service template
│   │   ├── output-ecommerce.css        # Compiled: ecommerce template
│   │   ├── output-portfolio.css        # Compiled: portfolio template
│   │   ├── output-webinar.css          # Compiled: webinar template
│   │   ├── output-comingsoon.css       # Compiled: coming soon template
│   │   ├── output-thankyou.css         # Compiled: thank you template
│   │   ├── output-notfound.css         # Compiled: 404 template
│   │   ├── output-dapurswindon.css     # Compiled: Dapur Swindon
│   │   └── output-sablanding.css       # Compiled: SAB Agency
│   ├── js/                             # JavaScript helpers (jika ada)
│   └── images/                         # Asset gambar
│
├── docs/
│   ├── USAGE.md                        # User guide — cara pakai & customisasi
│   └── TECHNICAL.md                    # Technical docs (file ini)
│
├── tailwind.config.js                  # Theme: 8 color palettes + 10 font families
├── postcss.config.js                   # Pipeline: tailwindcss + autoprefixer
├── package.json                        # 20 npm scripts (dev + build per template)
├── vercel.json                         # Deployment: build command + URL rewrites
└── README.md                           # Project overview
```

### Penjelasan Arsitektur

**Template-per-CSS Pattern** — Setiap template HTML punya pasangan file CSS input (`main-*.css`) dan output (`output-*.css`). Ini memungkinkan setiap template memiliki custom classes, animasi, dan utility yang spesifik tanpa bloating CSS template lain. Tailwind CLI mengscan hanya file yang relevan berdasarkan `content` path di `tailwind.config.js`.

**Component-as-Reference Pattern** — Folder `components/` bukan framework import system. Setiap file adalah HTML mandiri yang bisa dibuka langsung di browser untuk preview. Untuk menggunakan komponen, salin (copy-paste) blok HTML, CSS, dan JavaScript ke template target. Ini dipilih karena project ini pure HTML tanpa build-time framework.

**Theme System** — Warna dan font per-template dikonfigurasi di `tailwind.config.js` sebagai namespace terpisah (contoh: `sablanding-primary`, `dapurswindon-brown`). Setiap komponen juga mendukung override via CSS variables di `:root` untuk fleksibilitas per-halaman.

**Shared Build Pipeline** — Semua template menggunakan pipeline yang sama: Tailwind CSS CLI → PostCSS → Autoprefixer. Tidak ada bundler (Webpack/Vite) karena project ini sepenuhnya static HTML.

---

## Troubleshooting

### 1. CSS tidak ter-compile / output kosong

**Gejala:** File `output-*.css` kosong atau tidak berubah setelah edit HTML.

**Penyebab & Solusi:**

- **Tailwind CLI tidak berjalan** — Pastikan sudah menjalankan `npm run dev:[template]` di terminal terpisah.
- **Path salah di script** — Periksa `package.json`, pastikan path input CSS (`-i`) dan output (`-o`) benar.
- **File HTML di luar scan range** — Tailwind hanya scan path yang terdaftar di `tailwind.config.js` → `content`:
  ```javascript
  content: [
    "./templates/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ]
  ```
  Jika template baru berada di luar folder ini, tambahkan path-nya.

---

### 2. Font tidak muncul / fallback ke default

**Gejala:** Teks menggunakan font system default, bukan font yang dikonfigurasi.

**Solusi:**

- Pastikan Google Fonts `<link>` ada di `<head>` file HTML template:
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
  ```
- Pastikan nama font di `tailwind.config.js` → `fontFamily` sama persis dengan nama di Google Fonts URL.
- Cek koneksi internet — Google Fonts butuh akses ke `fonts.googleapis.com` dan `fonts.gstatic.com`.

---

### 3. WhatsApp link tidak bekerja

**Gejala:** Klik tombol WA tidak membuka chat atau membuka ke nomor salah.

**Solusi:**

- Format nomor harus tanpa tanda `+`, tanpa spasi, tanpa strip: `6282177336889`
- Pastikan format URL benar: `https://wa.me/628XXXXXXXXXX?text=...`
- Encode pesan dengan benar: spasi → `%20`, baris baru → `%0A`
- Cek variabel `WA_NUMBER` di semua blok `<script>` dalam template (bisa ada lebih dari satu).

---

### 4. Animasi scroll tidak trigger

**Gejala:** Elemen dengan class `anim-fade`, `anim-left`, dll tidak muncul saat scroll.

**Solusi:**

- Pastikan script IntersectionObserver ada di bagian bawah HTML (sebelum `</body>`).
- Cek apakah elemen punya class animasi yang benar (`anim-fade`, `anim-left`, `anim-right`, `anim-up`, `anim-scale`).
- Pastikan CSS animation classes terdefinisi di file `main-*.css` yang dipakai.
- Jika elemen sudah visible saat page load (di atas fold), IntersectionObserver mungkin langsung trigger — ini behavior normal.

---

### 5. Vercel deploy gagal

**Gejala:** Build error saat deploy ke Vercel.

**Solusi:**

- **"npm run build" gagal** — Pastikan `devDependencies` terinstall. Vercel menginstall devDependencies secara default, tapi jika di-override, tambahkan environment variable `NPM_FLAGS=--include=dev`.
- **File 404 di Vercel** — Cek `vercel.json` → `rewrites`. Pastikan path `destination` sesuai dengan lokasi file HTML yang benar.
- **CSS tidak ter-compile** — Jika hanya `npm run build` yang dijalankan, hanya template utama yang ter-compile. Ubah `buildCommand` ke `npm run build:all` (atau script gabungan) untuk compile semua template.

---

### 6. Mobile menu tidak toggle

**Gejala:** Hamburger menu tidak membuka menu di mobile.

**Solusi:**

- Pastikan `<script>` navbar sudah di-include di template.
- Cek ID element: `#menuBtn` (hamburger button) dan `.mobile-menu` (menu container) harus ada.
- Jika menggunakan multiple scripts, pastikan tidak ada konflik ID.

---

### 7. Countdown timer menunjukkan 00:00:00:00

**Gejala:** Semua digit countdown menampilkan nol.

**Solusi:**

- Tanggal target sudah lewat. Update `COUNTDOWN_TARGET` ke tanggal di masa depan:
  ```javascript
  const COUNTDOWN_TARGET = new Date("2027-01-01T00:00:00");
  ```
- Pastikan format tanggal valid (ISO 8601): `YYYY-MM-DDTHH:mm:ss`.

---

### 8. Tailwind classes tidak bekerja di komponen

**Gejala:** Tailwind utility classes di component file tidak menghasilkan styling.

**Solusi:**

- File komponen di `components/` menggunakan CDN Tailwind (`<script src="https://cdn.tailwindcss.com">`) untuk preview standalone. Ini terpisah dari build pipeline.
- Saat komponen dipindahkan ke template, pastikan template menggunakan compiled CSS (`output-*.css`) yang sudah meng-scan file HTML tersebut.
- Jika class baru ditambahkan, jalankan ulang `npm run dev:[template]` agar Tailwind meng-generate class tersebut.

---

### 9. Gambar tidak muncul setelah deploy

**Gejala:** Gambar placeholder Unsplash hilang atau gambar lokal 404.

**Solusi:**

- **Gambar lokal:** Pastikan path relatif benar. Dari `templates/`, path ke gambar adalah `../assets/images/nama-file.jpg`.
- **Gambar Unsplash:** URL Unsplash kadang berubah. Ganti dengan gambar lokal untuk production.
- **Case sensitive:** Server Linux (termasuk Vercel) case-sensitive. `Photo.JPG` dan `photo.jpg` adalah file berbeda.

---

### 10. Performance — halaman lambat di mobile

**Tips optimasi:**

- Kompres gambar sebelum deploy menggunakan [squoosh.app](https://squoosh.app) — target < 200KB per gambar.
- Pastikan CSS sudah di-build (minified) menggunakan `npm run build:[template]`.
- Gunakan `loading="lazy"` pada `<img>` yang berada di bawah fold.
- Font: semua template sudah menggunakan `font-display: swap` — tidak perlu perubahan.
- Hindari embed video autoplay — gunakan thumbnail + click-to-play sebagai gantinya.
