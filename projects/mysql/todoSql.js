module.exports = {
  todoList: 'select * from todo',
  todoGet: 'select * from todo where no = ?',
  todoInsert: 'insert into todo set ?',
  todoUpdate: 'update todo set ? where no = ?',
  todoDelete: 'delete from todo where no = ?'
}