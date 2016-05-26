'use strict'

// mock data
const data = {
  table1: [
    ['a', 'b', 'c'],
    ['d', 'e', 'f']
  ],
  table2: [
    ['g', 'h', 'i', 'j'],
    ['k', 'l', 'm', 'n']
  ]
}

// mock getData function
const getData = (query) => {
  return new Promise((resolve, reject) => {
    resolve(data[query.table][query.row][query.col])
  })
}

// Just to check that it works
// getData({ table: 'table1', row: 0, col: 2 }).then(console.log) // should equal c
// getData({ table: 'table2', row: 1, col: 3 }).then(console.log) // should equal n

module.exports = getData
