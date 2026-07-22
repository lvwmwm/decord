// Module ID: 13171
// Function ID: 99608
// Dependencies: []

// Module 13171
let _module = require(dependencyMap[0]);
if (_module) {
  _module = require(dependencyMap[1])(() => 42 !== Object.defineProperty(() => {

  }, "prototype", {}).prototype);
}

export default _module;
