// Module ID: 1615
// Function ID: 1616
// Name: jSReanimatedModule
// Dependencies: [1609, 1616, 1632]

// Module 1615 (jSReanimatedModule)
import isJest from "isJest";

if (isJest.shouldBeUseWeb()) {
  const _module1 = require("_makeShareableClone");
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = require("importDefaultResult1");
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;
