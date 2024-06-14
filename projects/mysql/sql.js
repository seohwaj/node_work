const boardSql = require('./boardSql')
const todoSql = require('./todoSql')
const customerSql = require('./customerSql')

module.exports = {
  ...boardSql, ...todoSql, ...customerSql
}