const http = require("http");
const express = require("express");
const app = express();

var porta = 9000

http.createServer(express).listen(porta, () => 
console.log(`http://localhosta:${porta}`
));

app.get("/", function(req, res) {
    res.send("<h1>Servidor rodando com ExpressJS</h1>");
});