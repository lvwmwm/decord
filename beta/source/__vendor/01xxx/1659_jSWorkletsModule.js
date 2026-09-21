// Module ID: 1659
// Function ID: 1660
// Name: jSWorkletsModule
// Dependencies: [1644, 1660, 1661]

// Module 1659 (jSWorkletsModule)
import JSWorklets from "JSWorklets" /* 1660 */;
import NativeWorklets from "NativeWorklets" /* 1661 */;
import module_1644 from "module_1644" /* 1644 */;

if (module_1644.shouldBeUseWeb()) {
  const _module1 = JSWorklets;
  let jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = NativeWorklets;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;
