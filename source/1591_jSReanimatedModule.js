// Module ID: 1591
// Function ID: 17762
// Name: jSReanimatedModule
// Dependencies: [1585, 1592, 1608]

// Module 1591 (jSReanimatedModule)
import isJest from "isJest";

if (isJest.shouldBeUseWeb()) {
  const _module1 = require("_makeShareableClone");
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = require("NativeReanimatedModule");
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;
