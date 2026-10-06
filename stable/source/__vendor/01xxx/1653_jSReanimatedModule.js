// Module ID: 1653
// Function ID: 1654
// Name: jSReanimatedModule
// Dependencies: [1647, 1654, 1670]

// Module 1653 (jSReanimatedModule)
import _updatePropsJS from "_updatePropsJS" /* 1654 */;
import _mod1670 from "module_1670" /* 1670 */;
import module_1647 from "module_1647" /* 1647 */;

let jSReanimatedModule;
if (module_1647.shouldBeUseWeb()) {
  const _module1 = _updatePropsJS;
  jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = _mod1670;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;
