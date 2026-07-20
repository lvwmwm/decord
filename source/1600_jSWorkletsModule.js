// Module ID: 1600
// Function ID: 17811
// Name: jSWorkletsModule
// Dependencies: []

// Module 1600 (jSWorkletsModule)
const _module = require(dependencyMap[0]);
if (_module.shouldBeUseWeb()) {
  const _module1 = require(dependencyMap[1]);
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = require(dependencyMap[2]);
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;
