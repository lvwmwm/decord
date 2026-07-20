// Module ID: 4235
// Function ID: 37234
// Name: initCloneObject
// Dependencies: []

// Module 4235 (initCloneObject)

export default function initCloneObject(arg0) {
  if ("function" === typeof arg0.constructor) {
    if (!require(dependencyMap[0])(arg0)) {
      require(dependencyMap[1])(require(dependencyMap[2])(arg0));
      const tmp5 = require(dependencyMap[1]);
    }
    return {};
  }
};
