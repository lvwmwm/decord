// Module ID: 4239
// Function ID: 37298
// Name: initCloneObject
// Dependencies: []

// Module 4239 (initCloneObject)

export default function initCloneObject(arg0) {
  if ("function" === typeof arg0.constructor) {
    if (!require(dependencyMap[0])(arg0)) {
      require(dependencyMap[1])(require(dependencyMap[2])(arg0));
      const tmp5 = require(dependencyMap[1]);
    }
    return {};
  }
};
