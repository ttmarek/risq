'use strict'

const test = require('tape')
const { original, working } = require('../lib/run-multiple-queries')

const someArrayOfQueries = [
  { table: 'table1', row: 0, col: 2 },
  { table: 'table2', row: 1, col: 3 }
]

test('Original (synchronous) version of runMultipleQueries', assert => {
  const msg = 'runMultipleQueires(someArrayOfQueries) returns []'
  assert.deepEqual(original(someArrayOfQueries), [], msg)
  assert.end()
})

test('Working (async) version of runMultipleQueries', assert => {
  const msg = 'runMultipleQueires(someArrayOfQueries) returns ["c", "n"]'
  working(someArrayOfQueries)
    .then(result => {
      assert.deepEqual(result, ['c', 'n'], msg)
      assert.end()
    })
})
