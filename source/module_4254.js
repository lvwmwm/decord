// Module ID: 4254
// Function ID: 37273
// Dependencies: []

// Module 4254
const tmp = require(dependencyMap[0]) && require(dependencyMap[0]).isSet;
if (tmp) {
  let _module = require(dependencyMap[1])(tmp);
} else {
  _module = require(dependencyMap[2]);
}

export default _module;
