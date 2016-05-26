'use strict'

const test = require('tape')
const { pipe1, pipe2 } = require('../lib/pipe')

// mock functions for testing
const add1 = (n) => n + 1       // Adds one to a number
const sub1 = (n) => n - 1       // Subtracts one from a number
const div2 = (n) => n / 2       // Divides a number by two
const add9 = (n) => n + 9       // Adds nine to a number

test('Running pipe1 with no arguments.', assert => {
  const msg = `pipe1()(1,2,3) returns [1, 2, 3]`

  assert.deepEqual(pipe1()(1, 2, 3), [1, 2, 3], msg)
  assert.end()
})

test('Running pipe1 with a single argument.', assert => {
  const msg = `pipe1(Math.max)(1,2,3) returns 3`

  assert.equal(pipe1(Math.max)(1, 2, 3), 3, msg)
  assert.end()
})

test('Running pipe1 with multiple arguments', assert => {
  const msg = `pipe1(Math.min, add9, div2, sub1)(10, 1, 3, 99) returns 4`

  assert.equal(pipe1(Math.min, add9, div2, sub1)(10, 1, 3, 99),
               sub1(div2(add9(Math.min(10, 1, 3, 99)))), msg)
  assert.end()
})

test('Running pipe2 with no arguments.', assert => {
  const msg = `pipe2()(1,2,3) returns [1, 2, 3]`

  assert.deepEqual(pipe2()(1, 2, 3), [1, 2, 3], msg)
  assert.end()
})

test('Running pipe2 with a single argument.', assert => {
  const msg = `pipe2(Math.max)(1,2,3) returns 3`

  assert.equal(pipe2(Math.max)(1, 2, 3), 3, msg)
  assert.end()
})

test('Running pipe2 with multiple arguments', assert => {
  const msg = `pipe2(Math.min, add9, div2, sub1)(10, 1, 3, 99) returns 4`

  assert.equal(pipe2(Math.min, add9, div2, sub1)(10, 1, 3, 99),
               sub1(div2(add9(Math.min(10, 1, 3, 99)))), msg)
  assert.end()
})
