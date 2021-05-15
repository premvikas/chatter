const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const app = express();
const port = 5000;

const router = require("./router");

const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: '*',
    }
});

app.use(router);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log("a user hopped in");
    socket.on('chat', (msg) => {
        console.log("message", msg);
        socket.emit("chat2", msg);
    });

    socket.on('disconnect', () => {
        console.log("user said see you soo");
    });
});

server.listen(port, () => {
    console.log("server running in port---> ", port);
});

//const server = require("http").createServer(app);
//const io = require("socket.io").listen(server);
//server.listen(process.env.PORT || 3000);