const express = require('express');
const fs = require('fs');
const https = require('https')
const app = express();
const PORT = 5000;

var os = require('os');
var networkInterfaces = os.networkInterfaces();

const CERT = {
  key: fs.readFileSync('localhost-key.pem'),
  cert: fs.readFileSync('localhost.pem'),
};

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/log', (req, res) => {
  console.log(req)
  res.send(status=200)
});

https.createServer(CERT, app)
  .listen(PORT, function () {
    console.log(`App running on https://localhost:${PORT}/`)
    console.log(`or  https://${networkInterfaces.en0[1].address}:${PORT}/`)
  })
