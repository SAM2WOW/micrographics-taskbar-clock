// Tiny static server for the design mock.
const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  const name = path.basename(req.url.split('?')[0]) || 'mock.html';
  fs.readFile(path.join(__dirname, name), (err, data) => {
    if (err) { res.writeHead(404); res.end('not found'); return; }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end(data);
  });
}).listen(4173, '127.0.0.1');
