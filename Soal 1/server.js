const net = require('net');
const PORT = 5050;
const server = net.createServer((socket) => {
    console.log('Client terhubung');
    socket.on('data', (data) => {
        const message = data.toString();
        console.log("Pesan dari client:", message);
        socket.write(data);
    });
    socket.on('end', () => {
        console.log("Client terputus");
    });
});

server.listen(PORT, () => {
    console.log(`Server TCP berjalan di port ${PORT}...`);
});
