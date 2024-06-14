const mysql = require('mysql2')
const conn = {
  host: '127.0.0.1',
  port: '3306',
  user: 'hr',
  password: 'hr',
  database: 'test',
  connectionLimit: 10
}
// 커넥션 풀 생성
const pool = mysql.createPool(conn);
// 쿼리 실행
let name = 'choi';
let email = 'choi@email.com';
let phone = '010-2222-2222';
// const sql = "insert into customers(name, email, phone) values(?, ?, ?)";
const sql = "insert into customers set ?";
const params = {name: 'park', email: 'park@email.com', phone: '010-3333-3333'}
// pool.query(sql, [name, email, phone], function(err, results, fields) {
pool.query(sql, params, function(err, results, fields) {
  if(err) console.log(err);
  console.log(results);
})