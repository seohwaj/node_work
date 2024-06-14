// mysql 모듈 로드
const mysql = require('mysql2')
// mysql 접속 설정
const conn = {
  host: '127.0.0.1', // 'localhost'
  port: '3306',
  user: 'hr',
  password: 'hr',
  database: 'test'
}
// DB 커넥션 생성
let connection = mysql.createConnection(conn);
// DB 접속
connection.connect();
// 쿼리 실행
let sql = 'select * from customers';
connection.query(sql, function(err, results, fields) {
  if(err) {
    console.log(err);
  }
  console.log(results);
})
// DB 접속 종료
connection.end();