const net = require('net');
const PORT = 5050;
let clients = [];

const server = net.createServer((socket) => {
    console.log('Client baru terhubung');
    clients.push(socket);
    socket.on('data', (data) => {
        const message = data.toString().trim();
        console.log("Pesan diterima:", message);
        for (let client of clients) {
            if (client !== socket) {
                client.write(message + "\n");
            }
        }
    });

    socket.on('end', () => {
        console.log("Client terputus");
        clients = clients.filter(c => c !== socket);
    });

    socket.on('error', () => {
        clients = clients.filter(c => c !== socket);
    });
});

server.listen(PORT, () => {
    console.log(`Server chat berjalan di port ${PORT}...`);
});