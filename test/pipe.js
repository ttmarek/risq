'use strict'

const test = require('tape')
const { pipe1, pipe2, pipe3 } = require('../lib/pipe')

// mock functions for testing
const add1 = (n) => n + 1       // Adds one to a number
const sub1 = (n) => n - 1       // Subtracts one from a number
const div2 = (n) => n / 2       // Divides a number by two
const add9 = (n) => n + 9       // Adds nine to a number

// mock functions that use arrays
const mul2 = (n) => n.map(v => v * 2)  // multiply each element by2
const add2 = (n) => n.map(v => v + 2)  // add 2 to each element
const sqr = (n) => n.map(v => v * v)   // square each element

// Pipe 1
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

// Pipe 2
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

// Pipe 3
test('Running pipe3 with a single argument.', assert => {
  const msg = `pipe3(Math.max)(1,2,3) returns 3`

  assert.equal(pipe3(Math.max)(1, 2, 3), 3, msg)
  assert.end()
})

test('Running pipe3 with multiple arguments', assert => {
  const msg = `pipe3(Math.min, add9, div2, sub1)(10, 1, 3, 99) returns 4`

  assert.equal(pipe3(Math.min, add9, div2, sub1)(10, 1, 3, 99),
               sub1(div2(add9(Math.min(10, 1, 3, 99)))), msg)
  assert.end()
})

test('Running pipe3 with an array argument', assert => {
  const msg = `pipe3(mul2, add2, sqr)([1,2,3,4]) returns [16, 36, 64, 100]`

  assert.deepEqual(pipe3(mul2, add2, sqr)([1,2,3,4]), [16, 36, 64, 100], msg)
  assert.end()
})
