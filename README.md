# 📝 TCP Networking Examples (Node.js)

Repositori ini berisi tiga program utama berbasis **Node.js**:

1.  **TCP Echo Server & Client (Node.js)**
2.  **Multiclient TCP Chat Server (Node.js)**
3.  **TCP Client dengan Timeout (Node.js)**

Panduan instalasi dan cara menjalankan setiap program ada di bawah.

# 📦 1. Requirements / Apa yang Harus Diinstall
## ✔ Node.js (WAJIB)

Gunakan Node.js minimal versi **18+**

Cek apakah sudah terpasang:
    node -v
    npm -v

Tidak ada library tambahan---semua program memakai module bawaan `net`
dari Node.js.

# 📁 2. Struktur Project

    UTS23B_PROGJAR_23423009/
     ├── Soal 1
     ├──── server.js
     ├──── client.js
     ├── Soal 2
     ├──── server.js
     ├──── client1.js
     ├──── client2.js
     ├──── client3.js
     ├── Soal 3
     └──── timeout_client.js

# 🚀 2. Menjalankan TCP Echo Server & Client (Node.js)

## ▶ 1. Jalankan Echo Server

    node server.js

## ▶ 2. Jalankan Echo Client

    node client.js

# 💬 4. Menjalankan Multiclient TCP Chat Server (Node.js)

## ▶ 1. Jalankan Chat Server

    node server.js

## ▶ 2. Jalankan Client (3 terminal terpisah)

    node client1.js
    node client2.js
    node client3.js

# ⏳ 5. Menjalankan TCP Client Dengan Timeout (Node.js)

## ▶ Jalankan Timeout Client

    node client.js

Jika terjadi timeout:

    Koneksi timeout!

# 📚 6. Catatan Tambahan

-   Semua menggunakan module `net` bawaan Node.js
-   Semua contoh memakai IPv4 (`127.0.0.1`)
-   Jalankan server **sebelum** client
-   Port bisa diubah sesuai kebutuhan

# 🎉 Selesai!
