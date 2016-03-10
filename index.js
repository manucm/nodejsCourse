//console.log('text');
var http = require('http');

var mysql = require('mysql');

var server = http.createServer(function(req, res) {
  res.end('text');
});

server.listen(1234);
