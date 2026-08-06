// Module ID: 1652
// Function ID: 1653
// Name: jSWorkletsModule
// Dependencies: [1637, 1653, 1654]

// Module 1652 (jSWorkletsModule)
import isJest from "isJest";

if (isJest.shouldBeUseWeb()) {
  const _module1 = require("JSWorklets");
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = require("NativeWorklets");
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;
