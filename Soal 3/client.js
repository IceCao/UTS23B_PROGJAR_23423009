const net = require('net');
const HOST = '127.0.0.1';
const PORT = 5050;
const client = new net.Socket();

const connectTimeout = setTimeout(() => {
    console.log("Koneksi timeout!");
    client.destroy();
}, 3000);

client.connect(PORT, HOST, () => {
    clearTimeout(connectTimeout); 
    console.log("Terhubung ke server.");

    client.write("Tes Koneksi dari Client");

    client.setTimeout(2000);
});

client.on('data', (data) => {
    console.log("Data dari server:", data.toString());

    client.setTimeout(2000);
});

client.on('timeout', () => {
    console.log("Koneksi timeout!");
    client.destroy();
});

client.on('close', () => {
    console.log("Koneksi ditutup.");
});

client.on('error', (err) => {
    if (!client.destroyed) {
        console.log("Terjadi error:", err.message);
    }
});
