// Module ID: 1664
// Function ID: 1665
// Name: jSReanimatedModule
// Dependencies: [1658, 1665, 1681]

// Module 1664 (jSReanimatedModule)
import _updatePropsJS from "_updatePropsJS" /* 1665 */;
import _mod1681 from "module_1681" /* 1681 */;
import module_1658 from "module_1658" /* 1658 */;

let jSReanimatedModule;
if (module_1658.shouldBeUseWeb()) {
  const _module1 = _updatePropsJS;
  jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = _mod1681;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;
