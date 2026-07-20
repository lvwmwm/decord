// Module ID: 13141
// Function ID: 99503
// Dependencies: []

// Module 13141
let closure_2 = require(dependencyMap[0])([].concat);

export default require(dependencyMap[1])("Reflect", "ownKeys") || function ownKeys(arg0) {
  const fResult = require(dependencyMap[2]).f(require(dependencyMap[3])(arg0));
  const f = require(dependencyMap[4]).f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
};
