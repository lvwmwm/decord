// Module ID: 1671
// Function ID: 1672
// Name: jSWorkletsModule
// Dependencies: [1656, 1672, 1673]

// Module 1671 (jSWorkletsModule)
import JSWorklets from "JSWorklets" /* 1672 */;
import NativeWorklets from "NativeWorklets" /* 1673 */;
import isJest from "isJest" /* 1656 */;

if (isJest.shouldBeUseWeb()) {
  const _module1 = JSWorklets;
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = NativeWorklets;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;
