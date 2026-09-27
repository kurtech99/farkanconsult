# 🏛️ PANDUAN & DOKUMENTASI PROYEK — FARKAN

> **FARKAN — Design & Build Interior**  
> *Architecture • Interior • Eksterior • Konstruksi*  
> **Live URL:** [https://blog.kurtech.my.id](https://blog.kurtech.my.id) / [https://farkanconsult.com](https://farkanconsult.com)  
> **Local URL:** `http://localhost/farkanconsult/` atau `http://farkanconsult.test/`  
> **Developer:** [KURTECH](https://kurtech.my.id)

---

## 📌 1. Ringkasan & Profil Website

Website **FARKAN** adalah platform profil bisnis konsultan desain interior, arsitektur, teknik sipil, dan pembangunan konstruksi (*Design & Build*) profesional dengan sentuhan estetika arsitektural modern mewah (*Luxury Dark Architectural Design*). 

Website ini dirancang untuk:
1. **Membangun Kredibilitas & Kepercayaan (Branding)**: Menampilkan karya arsitektur dan interior nyata di wilayah Karawang, Garut, dan sekitarnya.
2. **Konversi Lead Cepat (WhatsApp Driven)**: Memudahkan calon klien untuk konsultasi gratis dan meminta estimasi RAB langsung via WhatsApp resmi (`0853-1515-3663`).
3. **Survei Kepuasan & Google Maps Booster**: Mengumpulkan ulasan klien dan secara otomatis menyalin teks ulasan ke clipboard untuk mendorong pemberian rating Bintang 5 di Google Maps.

---

## 📞 2. Kontak & Konfigurasi Integrasi WhatsApp

| Fungsi | Nomor Kontak | Link / Endpoint WhatsApp | Catatan |
|---|---|---|---|
| **Konsultasi Proyek & Penjualan** | `0853-1515-3663` | `https://wa.me/6285315153663` | Tombol Header, Floating Button, Form Konsultasi Cepat, Modal Portofolio |
| **Manajemen & Survei Kepuasan** | `0853-1515-3663` | `https://wa.me/6285315153663` | Form Kepuasan Pelanggan & Ulasan Klien Selesai |
| **Email Resmi** | `info@farkanconsult.com` | `mailto:info@farkanconsult.com` | Footer & Bar Kontak |
| **Instagram** | `@farkan_consult` | `https://www.instagram.com/farkan_consult?stkn=eG5iMmtwcWc3b3Rt` | Topbar & Footer |
| **TikTok** | `@farkan_consult` | `https://www.tiktok.com/@farkan_consult?_r=1&_t=ZS-99PoDO0ShKm` | Topbar & Footer |
| **Google Maps Studio** | Studio Farkan Cikampek | `https://maps.google.com/?q=Jl.+Pawarengan,+Dawuan+Tengah,+Cikampek,+Karawang` | Embed Kontak & Modal Google Review Booster |

---

## 📂 3. Struktur Direktori Proyek

```text
c:/laragon/www/farkanconsult/
├── assets/
│   ├── css/
│   │   └── style.css            # Stylesheet utama (Theme Dark Luxury & Responsive)
│   ├── images/
│   │   ├── farkan_logo.png      # Logo resmi lingkaran FARKAN (Icon & Favicon)
│   │   ├── office_ruko_render.jpg # 3D Render Kantor Studio FARKAN Cikampek
│   │   ├── office_ruko_real.png # Foto fisik kantor ruko FARKAN
│   │   ├── arkan_ashidiq.jpg    # Foto profil Principal / Direktur
│   │   ├── hero_bg.png          # Visual background hero section
│   │   ├── hero_feature.png     # Visual mockup & branding hero
│   │   ├── modern_villa_split.jpg # Portofolio Luxury Tropical Villa & Pool
│   │   ├── kitchen_island_luxury.jpg # Portofolio Custom Kitchen & Island Table
│   │   ├── master_bedroom_warm.jpg # Portofolio Master Bedroom Suite
│   │   ├── cafe_commercial_modern.jpg # Portofolio Cafe & Resto Commercial
│   │   ├── bathroom_powder_luxury.jpg # Portofolio Luxury Bathroom & Vanity
│   │   ├── modern_compact_industrial.jpg # Portofolio Compact Industrial House
│   │   ├── interior_1.png       # Portofolio Interior Luxury Travertine
│   │   ├── interior_2.png       # Portofolio Interior Konsep Japandi
│   │   ├── karawang_1.jpg ~ 4   # Portofolio Kediaman Pak Fahmi Karawang
│   │   ├── limbangan_1.jpg ~ 7  # Portofolio Rumah Bpk. Trsna Limbangan Garut
│   │   └── project_alt.jpg      # Portofolio Showroom Komersial Modern
│   └── js/
│       └── main.js              # Interaktivitas (24 Katalog Database, Modal, Filter, WA Form)
├── index.html                   # Halaman landing page lengkap (24 Portofolio & SEO)
├── INTRUKSI.md                  # Dokumentasi panduan proyek & pemeliharaan
└── intruksi/                    # Folder instruksi pendukung
```

---

## 🌟 4. Fitur-Fitur Utama Website

### A. Header Navigasi & Mobile Menu
- Sticky Navbar dengan efek *glassmorphism blur* saat discroll.
- Indikator navigasi aktif dinamis (*Scroll Spy*) sesuai posisi section halaman.
- Menu drawer responsif untuk perangkat mobile dan tablet dengan backdrop blur.

### B. Hero & Showcase Carousel Dinamis
- Headline berkarakter arsitektural dengan gradien *Luxury Gold*.
- Quick Stat Counter: *100% Custom Design, 3D Ultra Realistis, DED & RAB Rinci, Garansi Mutu*.
- **Hero Showcase Carousel (Auto-Slider 4.5 Detik)**:
  - Kartu visual di sebelah kanan beranda kini bergulir otomatis (*smooth cross-fade & scale transition*) setiap 4.5 detik menampilkan karya-karya unggulan bergantian (Studio Kantor Cikampek, Hunian Limbangan Garut, Luxury Tropical Villa, Custom Kitchen Set, Kediaman Pak Fahmi Karawang, The Social Grind Cafe).
  - Dilengkapi *progress bar timer*, tombol navigasi panah kiri/kanan, indikator *dots*, fitur jeda saat kursor diarahkan (*pause on hover*), dan dukungan *touch swipe* di HP/tablet.
  - Setiap slide dapat diklik langsung untuk membuka Lightbox Modal lengkap dengan resolusi tinggi.

### C. Profil Tentang Kami & Pendiri
- Menampilkan visi perusahaan, keunggulan arsitektural (efisiensi termal iklim tropis, transparansi RAB tanpa markup tersembunyi).
- Kartu mengambang profil **Arkan Ashidiq** (Direktur / Principal).

### D. Layanan Komprehensif (3 Pilar Utama)
1. **Arsitektur**: Konsep denah, 3D render ultra-realistis, DED arsitektur.
2. **Sipil & Konstruksi**: Analisis struktur tahan gempa, penyusunan RAB, pengawasan lapangan.
3. **Desain Interior**: Tata ruang, lighting architecture, *custom furniture & cabinetry*.

### E. 7 Tahapan Alur Kerja Sistematis
1. Konsultasi $\rightarrow$ 2. Survei Lokasi $\rightarrow$ 3. Konsep Desain $\rightarrow$ 4. Visualisasi 3D $\rightarrow$ 5. Pengembangan Desain (DED & RAB) $\rightarrow$ 6. Pelaksanaan $\rightarrow$ 7. Serah Terima Kunci.

### F. Galeri & Portofolio Interaktif (Lightbox Modal)
- Filter kategori instan: *Semua Karya, Hunian & Perumahan, Kawasan Komersial, Desain Interior, Fasad & Material*.
- Klik pada kartu portofolio memunculkan **Lightbox Modal** beresolusi tinggi dengan thumbnail selector, data klien, lokasi, konsep, lingkup kerja, dan narasi arsitektur lengkap.
- Tombol konsultasi di dalam modal langsung menyertakan nama portofolio ke chat WhatsApp.

### G. Formulir Kepuasan Klien & Google Maps Booster
- Fitur khusus bagi klien yang telah menyelesaikan proyek.
- Pemilihan rating bintang interaktif (1 s/d 5) dengan hover & touch preview.
- Saat formulir dikirim:
  1. Ringkasan ulasan diformat dan dikirim ke WhatsApp manajemen (`0853-1515-3663`).
  2. Teks testimoni secara otomatis disalin ke *clipboard*.
  3. Modal popup *Google Maps Booster* muncul, mengajak klien memberi rating Bintang 5 di Google Maps tinggal klik paste/tempel.

### H. Formulir Konsultasi Cepat (Lead Generator)
- Memungkinkan calon klien memasukkan nama, nomor WhatsApp, pilihan layanan, lokasi, dan deskripsi kebutuhan.
- Langsung merangkai template pesan terstruktur dan membuka WhatsApp resmi (`0853-1515-3663`).

---

## 🛠️ 5. Panduan Pemeliharaan & Update Konten

### Menambah Proyek Baru ke Portofolio
1. Simpan foto-foto proyek baru ke dalam folder `assets/images/` (contoh: `proyek_baru_1.jpg`).
2. Buka `assets/js/main.js` pada objek `projectsData`, tambahkan entri data baru:
   ```javascript
   proyek_baru: {
     id: 'proyek_baru',
     title: 'Nama Proyek Baru',
     client: 'Nama Klien',
     location: 'Kota / Lokasi',
     category: 'residential', // residential | commercial | interior | facade
     categoryLabel: 'Hunian & Perumahan',
     concept: 'Konsep Desain',
     year: '2026',
     scope: 'Lingkup Pekerjaan',
     images: [
       'assets/images/proyek_baru_1.jpg',
       'assets/images/proyek_baru_2.jpg'
     ],
     excerpt: 'Deskripsi singkat kartu...',
     description: `Ulasan narasi detail proyek...`
   }
   ```
3. Tambahkan kartu HTML di `index.html` pada bagian `#portofolio .portfolio-grid`:
   ```html
   <div class="portfolio-item" data-category="residential" data-id="proyek_baru">
     <div class="portfolio-thumb">
       <img src="assets/images/proyek_baru_1.jpg" alt="Nama Proyek" loading="lazy">
       <span class="portfolio-category-tag">Hunian & Perumahan</span>
     </div>
     <div class="portfolio-body">
       <div class="portfolio-loc">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
         <span>Lokasi Proyek</span>
       </div>
       <h3 class="portfolio-title">Nama Proyek Baru</h3>
       <p class="portfolio-excerpt">Deskripsi singkat...</p>
       <div class="portfolio-footer">
         <span class="portfolio-link-btn">
           Lihat Detail Proyek
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
         </span>
       </div>
     </div>
   </div>
   ```

---

## 🚀 6. Panduan Publikasi & Hosting (Production)

Website FARKAN Consult telah dipublikasikan dan dapat diakses melalui domain:
- **Primary Domain:** `blog.kurtech.my.id` (atau custom domain `farkanconsult.com`)

### Sinkronisasi ke Server / Hosting:
Cukup upload seluruh isi folder `c:/laragon/www/farkanconsult/` (`index.html`, folder `assets/`) ke direktori root hosting (seperti `public_html/` atau cPanel/Cloudflare Pages). Tidak memerlukan backend engine tambahan (Pure HTML, CSS & Vanilla JS berkinerja tinggi).

---
*Dokumentasi ini dibuat & diperbarui untuk tim FARKAN Consult & KURTECH.*
