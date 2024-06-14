const express = require('express')
const router = express.Router()
const query = require('../mysql/index.js')
const multer = require('multer')
const upload = multer({dest: 'd:/upload/'})

router.get('/', (req, res) => {
  let page;
  if(req.query.page == undefined) {
    page = 0;
  } else {
    page = (Number(req.query.page) - 1) * 10;
  }
  query('boardList', page)
  .then(result => res.send(result))
})
router.get('/:no', (req, res) => {
  query('boardGet', req.params.no)
  .then(result => res.send(result))
})
router.post('/', upload.single('xxxx'), (req, res) => {
  // let data = {...req.body};
  // // 첨부파일이 있으면
  // if() {
  //   data.filename = req.file.
  //   data.uploadfilename = req.file.
  // }
  query('boardInsert', data)
  .then(result => res.send(result))
})
router.put('/:no', (req, res) => {
  query('boardUpdate', [req.body, req.params.no])
  .then(result => res.send(result))
})
router.delete('/:no', (req, res) => {
  query('boardDelete', req.params.no)
  .then(result => res.send(result))
})

module.exports = router

/*
let no = 2;
board = [
  {
    "no": 1,
    "title": "title1",
    "writer": "writer1",
    "content": "content1"
  },
  {
    "no": 2,
    "title": "title2",
    "writer": "writer2",
    "content": "content2"
  }
]

router.get('/', (req, res) => {
  console.log(new Date(req.requestTime).toLocaleString())
  res.send(board)
})
router.get('/:no', (req, res) => {
  // console.log('no:', req.params.no)
  res.send(board.find(b => b.no == req.params.no))
})
router.post('/', (req, res) => {
  // console.log(req.body)
  req.body.no = ++no
  board.push(req.body)
  res.send(board)
})
router.put('/:no', (req, res) => {
  board = board.map(b => b.no == req.params.no ? {...b, ...req.body} : b)
  res.send(board)
})
router.delete('/:no', (req, res) => {
  // indexOf -> splice  
  // filter
  board = board.filter(b => b.no != req.params.no)
  res.send(board)
})
module.exports = router
*/
