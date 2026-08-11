// Module ID: 1671
// Function ID: 1672
// Name: jSWorkletsModule
// Dependencies: [1656, 1672, 1673]

// Module 1671 (jSWorkletsModule)
import isJest from "isJest";

if (isJest.shouldBeUseWeb()) {
  const _module1 = require("JSWorklets");
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = require("NativeWorklets");
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;
