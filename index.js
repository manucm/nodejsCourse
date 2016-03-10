//console.log('text');
var http = require('http');

var mysql = require('mysql');

var db = mysql.createPool({
  host:'localhost',
  user: 'root',
  password: '',
  database:'idb_esme_new',
  //connectionLimit
});






var server = http.createServer(function(req, res) {
  db.query('select * from country', function(err, result) {
    if (err) {
      console.log(err);
      res.end('Error')
    } else {

      var sqlResult = '';
      for (var i=0; i  < result.length; i++) {
        sqlResult += result[i].name + '\n';
      }



      res.end(sqlResult);
      console.log(sqlResult);


    }


  });
});
/*
connection.connect();

connection.query('SELECT * from country', function(err, rows, fields) {
 if (err) throw err;

 console.log('The solution is: ', rows[0].solution);
});

connection.end();*/

server.listen(1234);
