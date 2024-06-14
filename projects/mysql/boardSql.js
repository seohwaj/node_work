module.exports = {
  boardList: 'select * from board limit ?, 10',
  boardGet: 'select * from board where no = ?',
  boardInsert: 'insert into board set ?',
  boardUpdate: 'update board set ? where no = ?', 
  boardDelete: 'delete from board where no = ?'
}

