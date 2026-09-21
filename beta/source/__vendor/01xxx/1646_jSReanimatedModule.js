// Module ID: 1646
// Function ID: 1647
// Name: jSReanimatedModule
// Dependencies: [1640, 1647, 1663]

// Module 1646 (jSReanimatedModule)
import _makeShareableClone from "_makeShareableClone" /* 1647 */;
import NativeReanimatedModule from "NativeReanimatedModule" /* 1663 */;
import module_1640 from "module_1640" /* 1640 */;

if (module_1640.shouldBeUseWeb()) {
  const _module1 = _makeShareableClone;
  let jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = NativeReanimatedModule;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;
