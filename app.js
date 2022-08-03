const http = require('http');

http.createServer(function (req, res) {
  res.write('welcome to app.js page!'); 
  res.end(); 
}).listen(8080, '0.0.0.0');
