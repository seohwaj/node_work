const express = require('express')
const boardRouter = require('./routes/board.js')
const customerRouter = require('./routes/customer.js')
const fileRouter = require('./routes/file.js')
const todoRouter = require('./routes/todo.js')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const morgan = require('morgan')

// 서버
const app = express()
const port = 3000

// 미들웨어
// 요청과 응답의 중간에서 목적에 맞는 특정 기능을 하는 함수
// body-parse : 클라이언트로부터 전달받은 데이터 처리
// 1. form
// app.use(express.urlencoded({extended: false}))
// 2. json
app.use(express.json())
// requestTime
const requestTime = function(req, res, next) {
  req.requestTime = Date.now()
  next()
}
app.use(requestTime)
// cookie-parser
app.use(cookieParser())
// cors
app.use(cors())
// morgan
app.use(morgan(':date :method :url :status'))

// app.method(path, handler)
app.get('/', (req, res) => {
  console.log(req.cookies)
  res.send('hello world!')
})
app.get('/post', (req, res) => {
  res.send('post world')
})
// 정규표현식
// app.get('/ab?cd', (req, res) => {
//   res.send('regular expression')
// })
// app.get(/a/, (req, res) => {
//   res.send('a가 포함')
// })
// app.get(/^insert/, (req, res) => {
//   res.send('insert로 시작하는')
// })
// next
const ex0 = function(req, res, next) {
  console.log('첫 번째 콜백 함수');
  next();
}
const ex1 = function(req, res, next) {
  console.log('두 번째 콜백 함수');
  next();
}
const ex2 = function(req, res) {
  res.send('세 번째 콜백 함수');
}
app.get('/examples', [ex0, ex1, ex2]);

// router
app.use('/board', boardRouter)
app.use('/customer', customerRouter)
app.use('/file', fileRouter)
app.use('/todo', todoRouter)

// 서버 실행
app.listen(port, () => {
  console.log(`http://127.0.0.1:${port} 서버 실행`)
})