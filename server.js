const express = require("express");
const app = express();
const port = 3000;

const http = require("http");
const server = http.createServer(app);

server.listen(port, () => {
    console.log("server running in port---> ", port);
});
//const server = require("http").createServer(app);
//const io = require("socket.io").listen(server);
//server.listen(process.env.PORT || 3000);