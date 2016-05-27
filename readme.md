# RISQ #
> Interview screening questions for a Toronto-based dev shop, and my solutions.

## Question 1 ##

> Implement a function pipe() that takes several functions as
> arguments and returns a new function that will pass its argument to
> the first function, then pass the result to the second, then pass
> the result of the second to the third, and so on, finally returning
> the output of the last function. In other words, calling pipe(foo,
> bar, baz)(1, 2, 3) would be equivalent to calling
> baz(bar(foo(1,2,3))).

### SOLUTION ###

I wrote two implementations of the pipe function, one that uses reduce
(pipe2) and one that doesn't (pipe1). There are limitations to both
implementations which I've highlighted in the comments. Both functions
have tests and are heavily annotated for your reading pleasure.

 - To see the source for pipe1 and pipe2 see: [lib/pipe.js](lib/pipe.js)
 - To see test/examples of pipe1 and pipe2 in action see: [test/pipe.js](test/pipe.js)

## Question 2 ##

> Suppose getData is a function that takes a query object and returns
> a promise for the result of the query. Suppose also that
> someArrayOfQueries is an array of query objects. Explain what would
> be printed by the following code and why:

``` javascript
function runMultipleQueries(queries) {

  var results = [];

  queries.forEach(doQuery);

  return results;

  function doQuery(query) {

    getData(query)

      .then(results.push.bind(results));

  }

}

function log(value) {

  console.log(value);

}

runMultipleQueries(someArrayOfQueries).forEach(log);
```

### SOLUTION ###

What would be printed?

 - An empty array, like [ ].

Why would the function return an empty array?

 - I've annotated each code block in runMultipleQueries here:
   [lib/run-multiple-queries.js](lib/run-multiple-queries.js)
 - In a nutshell the function returns the results before the getData
   jobs are complete.

How would you re-write runMultipleQueries so that it works?

 - Since runMultipleQueries is performing async operations (getData),
   the function must either be written as a higher-order function
   (takes a callback as an argument), or the function must return a
   Promise.
 - I wrote a working implementation here (the function's name is
   'working'):
   [lib/run-multiple-queries.js](lib/run-multiple-queries.js)
 - You can see examples/tests of the function in action here:
   [test/run-multiple-queries.js](test/run-multiple-queries.js)

## Running this Module ##

If you'd like to play around with the module and see the tests run for
yourself, follow these steps:

``` shell

 git clone https://github.com/ttmarek/risq.git

 cd risq

 nvm use 6.0

 npm install

 npm tst

```
