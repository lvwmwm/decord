// Module ID: 1600
// Function ID: 17817
// Name: jSWorkletsModule
// Dependencies: [1585, 1601, 1602]

// Module 1600 (jSWorkletsModule)
import isJest from "isJest";

if (isJest.shouldBeUseWeb()) {
  const _module1 = require("JSWorklets");
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = require("NativeWorklets");
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;
