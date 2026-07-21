// Module ID: 1591
// Function ID: 17761
// Name: jSReanimatedModule
// Dependencies: [1585, 1615, 1723]

// Module 1591 (jSReanimatedModule)
import isJest from "isJest";

if (isJest.shouldBeUseWeb()) {
  const _module1 = require("ReanimatedFlatList");
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = require("AnimatedImage");
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;
