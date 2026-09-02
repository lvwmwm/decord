// Module ID: 1670
// Function ID: 1671
// Name: jSWorkletsModule
// Dependencies: [1655, 1671, 1672]

// Module 1670 (jSWorkletsModule)
import JSWorklets from "JSWorklets" /* 1671 */;
import NativeWorklets from "NativeWorklets" /* 1672 */;
import isJest from "isJest" /* 1655 */;

if (isJest.shouldBeUseWeb()) {
  const _module1 = JSWorklets;
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = NativeWorklets;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;
