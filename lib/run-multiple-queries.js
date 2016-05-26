'use strict'

const getData = require('./get-data')

// ORIGINAL IMPLEMENTATION
function runMultipleQueries(queries) {

  var results = [];

  queries.forEach(doQuery);     // >> All this is doing is queuing
                                // jobs. It does not wait for each job
                                // to finish.

  return results;               // >> At this point all jobs are
                                // queued, but none are complete,
                                // so results is still empty, and
                                // the function will return an
                                // empty array.

  function doQuery(query) {
    getData(query)
      .then(results.push.bind(results)); // >> bind(results) makes no
                                         // sense. If anything it
                                         // would be just .then(results.push)
  }

}

// WORKING IMPLEMENTATION
function working (queries) {
  const results = []
  return new Promise((resolve, reject) => {
    queries.forEach((query) => {
      getData(query)
        .then(data => {
          results.push(data)
          // Resolve the Promise once all getData jobs are complete
          if (results.length === queries.length) {
            resolve(results)
          }
        })
    })
  })
}

module.exports = {
  working,
  original: runMultipleQueries
}
