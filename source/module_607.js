// Module ID: 607
// Function ID: 7043
// Dependencies: [2030043138, 33554434, 2030043136]

// Module 607
const tmp = require(dependencyMap[0]) && require(dependencyMap[0]).isTypedArray;
if (tmp) {
  let _module = require(dependencyMap[1])(tmp);
} else {
  _module = require(dependencyMap[2]);
}

export default _module;
