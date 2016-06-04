'use strict'

// Basic implementation of pipe
const pipe1 = (...funcs) => {
  // All provided functions are stored in the funcs 'rest' parameter
  // as an array. In older JS implementations you would have to use
  // the 'arguments' object. Rest parameters have an advantage over the
  // arguments object in that they are provided as a true array.
  return (...args) => {         // The function that pipe1() returns
    // The variable args now holds all the arguments passed after pipe()
    let result = args
    for (let i = 0; i < funcs.length; i++) {
      // The only reason I added the following check (to see if the
      // result is an array) is because the question included the
      // example pipe(foo, bar, baz)(1, 2, 3). This'll be an issue if
      // either bar or baz expects an array as an argument.  In a
      // real-world implementation of pipe, I'd suggest to limit the
      // function returned by pipe to taking only one argument.
      if (Array.isArray(result)) {
        // I'm using 'apply' here to spread the array into function
        // arguments:
        result = funcs[i].apply(null, result)
      } else {
        result = funcs[i](result)
      }
    }
    return result
  }
}

// Implementation of pipe using reduce
const pipe2 = (...funcs) => {
  // As with pipe1, I used rest parameters so that the function can
  // accept an arbitrary number of arguments
  return (...args) => {         // The function that pipe2() returns
    return funcs.reduce((result, func) => {
      // Checking for an array for the same reasons noted in pipe1's comments
      if (Array.isArray(result)) {
        return func.apply(null, result) // spreading the array into arguments
      }
      return func(result)
    }, args)                    // On the first iteration result will
                                // equal args. For every other
                                // iteration result will equal
                                // func(result)
  }
}

// One line implementation of pipe (The winner)
const pipe3 = (func1, ...rest) => (...args) => rest.reduce((result, func) => func(result), func1(...args))

module.exports = {
  pipe3,
  pipe1,
  pipe2
}
