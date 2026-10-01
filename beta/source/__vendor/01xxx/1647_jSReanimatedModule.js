// Module ID: 1647
// Function ID: 1648
// Name: jSReanimatedModule
// Dependencies: [1641, 1648, 1664]

// Module 1647 (jSReanimatedModule)
import _updatePropsJS from "_updatePropsJS" /* 1648 */;
import _mod1664 from "module_1664" /* 1664 */;
import module_1641 from "module_1641" /* 1641 */;

let jSReanimatedModule;
if (module_1641.shouldBeUseWeb()) {
  const _module1 = _updatePropsJS;
  jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = _mod1664;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;
