const http = require("http");
const express = require("express");
const app = express();
const path = require('path')

var porta = 9090

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/ui/index.html'))
  })

http.createServer(app).listen(porta, () => 
console.log(`http://localhost:${porta}`)
);