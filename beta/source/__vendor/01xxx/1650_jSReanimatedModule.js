// Module ID: 1650
// Function ID: 1651
// Name: jSReanimatedModule
// Dependencies: [1644, 1651, 1667]

// Module 1650 (jSReanimatedModule)
import _makeShareableClone from "_makeShareableClone" /* 1651 */;
import NativeReanimatedModule from "NativeReanimatedModule" /* 1667 */;
import module_1644 from "module_1644" /* 1644 */;

if (module_1644.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = NativeReanimatedModule;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;
