// Module ID: 1661
// Function ID: 1662
// Name: jSReanimatedModule
// Dependencies: [1655, 1662, 1678]

// Module 1661 (jSReanimatedModule)
import _makeShareableClone from "_makeShareableClone" /* 1662 */;
import importDefaultResult1 from "importDefaultResult1" /* 1678 */;
import isJest from "isJest" /* 1655 */;

if (isJest.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = importDefaultResult1;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;
