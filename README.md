# AMERTA Website V2

Website static multi-page yang siap di-deploy ke Vercel.

## Halaman
- `/` Home
- `/bukti-publikasi.html` seluruh 139 link publikasi unik dari sumber AMERTA, dengan filter kategori, pencarian, pagination, dan link langsung ke artikel
- `/insight.html` blog/SEO ringan yang dapat diperbarui melalui `data/insights.js`

## Update artikel SEO
Buka:
`data/insights.js`

Tambahkan object dengan format:
{
  "title": "Judul artikel",
  "category": "SEO",
  "date": "2026-09-25",
  "excerpt": "Ringkasan pendek untuk kartu.",
  "body": "Paragraf pertama.\n\nParagraf kedua."
}

Simpan lalu deploy ulang ke Vercel.

## Logo media
Versi ini memakai favicon/brand asset yang dilayani oleh domain resmi media untuk logo media utama, sehingga tidak memakai wordmark buatan seperti versi sebelumnya. Browser membutuhkan koneksi internet untuk memuat asset logo eksternal.

## Harga
Nominal paket sengaja tidak ditampilkan. CTA diarahkan ke konsultasi berdasarkan kebutuhan, target media dan skala publikasi.

## Kontak
WhatsApp: 0851 3866 2465
Instagram: @amerta.000000
