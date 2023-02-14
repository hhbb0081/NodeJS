const mysql = require('mysql2');

const conn = {
  host: 'localhost',
  user: 'root',
  port: '3305',
  database: 'test',
  password: ''
};

let connection = mysql.createConnection(conn);
connection.connect();

let sql = "SELECT * FROM test.test_table";

connection.query(sql, function (err, results, fields) { 
    if (err) {
        console.log(err);
    }
    console.log(results);
});


connection.end();