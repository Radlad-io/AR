const express = require('express');
const fs = require('fs');
const https = require('https')
const app = express();
const PORT = 5000;

const CERT = {
  key: fs.readFileSync('localhost-key.pem'),
  cert: fs.readFileSync('localhost.pem'),
};

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

https.createServer(CERT, app)
  .listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}! Go to https://localhost:${PORT}/`)
  })
