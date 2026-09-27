# 📌 PANDUAN & CHEATSHEET KERJA 2 KOMPUTER (FARKAN ERP & WEBSITE)

Dokumen ini adalah panduan praktis agar Anda bisa bekerja bergantian antara **Komputer 1** dan **Komputer 2** dengan aman, cepat, dan otomatis sinkron melalui GitHub & Hostinger.

---

## 🔑 Aturan Emas Bekerja 2 Komputer
> **"Tarik sebelum mulai bekerja, Kirim setelah selesai bekerja."**

---

## 🖥️ 1. Alur Perintah Terminal Harian

### A. SEBELUM MULAI BEKERJA (Di Komputer Mana Saja)
Setiap kali Anda baru menyalakan komputer dan ingin mulai bekerja, tarik kode terbaru:

```bash
# Untuk Aplikasi ERP:
cd C:\laragon\www\app_farkan
git pull origin main
php artisan migrate

# Untuk Website Utama (Landing Page):
cd C:\laragon\www\farkanconsult
git pull origin main
```

---

### B. SETELAH SELESAI BEKERJA (Mau Pindah Komputer)
Setelah Anda selesai mengedit kode/tampilan, kirim perubahan ke GitHub & Hostinger:

```bash
# Untuk Aplikasi ERP:
cd C:\laragon\www\app_farkan
git add .
git commit -m "update data / fitur terbaru"
git push origin main

# Untuk Website Utama (Landing Page):
cd C:\laragon\www\farkanconsult
git add .
git commit -m "update portofolio / tampilan"
git push origin main
```

---

## ⚡ 2. Shortcut 1-Klik Tanpa Perlu Buka Terminal

Untuk mempermudah, di folder `C:\laragon\www\app_farkan\` telah disediakan skrip otomatis:

1. **`TARIK_UPDATE.bat`**  
   👉 Cukup double-click file ini saat ingin menarik update terbaru dari komputer lain/GitHub.
   
2. **`KIRIM_UPDATE.bat`**  
   👉 Cukup double-click file ini saat selesai bekerja untuk mengirim seluruh perubahan ke GitHub & Hostinger otomatis.

---

## 🌐 3. Daftar URL & Link Akses Sistem

| Nama Modul | Akses Lokal (Komputer) | Akses Live Publik (Online) |
|---|---|---|
| **Website Utama (Profil/Portofolio)** | `http://localhost/farkanconsult/` atau `http://farkanconsult.test` | [https://farkanconsult.com](https://farkanconsult.com) |
| **Aplikasi ERP (Kas & Finansial)** | `http://127.0.0.1:8000` atau `http://app_farkan.test` | [https://app.farkanconsult.com](https://app.farkanconsult.com) |

---

## 🔑 4. Kredensial Login Aplikasi ERP

- **Role Owner (Pimpinan)**: `arkanashidiq@gmail.com` / `password` (atau `owner@farkan.com` / `password123`)
- **Role Admin Kantor**: `suryani@farkan.consult.com` / `password` (atau `admin@farkan.com` / `password123`)
- **Role Project Manager**: `manager@farkan.com` / `password123`
