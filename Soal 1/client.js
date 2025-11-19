const net = require('net');
const PORT = 5050;
const HOST = '127.0.0.1';

const client = new net.Socket();
client.connect(PORT, HOST, () => {
    console.log("Terhubung ke server");
    const pesan = "Tes Koneksi";
    client.write(pesan);
});

client.on('data', (data) => {
    console.log("Hasil balikan dari server:", data.toString());
    client.destroy();
});

client.on('close', () => {
    console.log("Koneksi ditutup");
});
