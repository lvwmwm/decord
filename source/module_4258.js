// Module ID: 4258
// Function ID: 37329
// Dependencies: []

// Module 4258
const tmp = require(dependencyMap[0]) && require(dependencyMap[0]).isSet;
if (tmp) {
  let _module = require(dependencyMap[1])(tmp);
} else {
  _module = require(dependencyMap[2]);
}

export default _module;
