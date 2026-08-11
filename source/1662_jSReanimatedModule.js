// Module ID: 1662
// Function ID: 1663
// Name: jSReanimatedModule
// Dependencies: [1656, 1663, 1679]

// Module 1662 (jSReanimatedModule)
import isJest from "isJest";

if (isJest.shouldBeUseWeb()) {
  const _module1 = require("_makeShareableClone");
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = require("importDefaultResult1");
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;
