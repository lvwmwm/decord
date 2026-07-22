// Module ID: 4260
// Function ID: 37340
// Dependencies: []

// Module 4260
const tmp = require(dependencyMap[0]) && require(dependencyMap[0]).isMap;
if (tmp) {
  let _module = require(dependencyMap[1])(tmp);
} else {
  _module = require(dependencyMap[2]);
}

export default _module;
