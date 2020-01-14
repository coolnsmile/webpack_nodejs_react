const AWS = require('aws-sdk');

var mysql = require('mysql');
console.log('aaa');
var connection = mysql.createConnection({

    host: "kh-rds-mysql.cpz602x20cvt.ap-northeast-2.rds.amazonaws.com",

    user: "admin",

    password: "kkh4790!",

    database: "kh",

});



connection.query('show databases', function (error, results, fields) {

  if (error) {

     connection.destroy();

     throw error;

  } else {

     // connected!
     console.log(results);
  }
});

