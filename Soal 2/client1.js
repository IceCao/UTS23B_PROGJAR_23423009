const net = require('net');
const readline = require('readline');

const client = new net.Socket();
client.connect(5050, '127.0.0.1', () => {
    console.log("Client1 terhubung ke server");
});

client.on('data', (data) => {
    console.log("[Broadcast] " + data.toString());
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (text) => {
    client.write("Client1: " + text);
});
