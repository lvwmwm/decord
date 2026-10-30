// Module ID: 1660
// Function ID: 1661
// Name: jSReanimatedModule
// Dependencies: [1654, 1661, 1677]

// Module 1660 (jSReanimatedModule)
import _updatePropsJS from "_updatePropsJS" /* 1661 */;
import _mod1677 from "module_1677" /* 1677 */;
import module_1654 from "module_1654" /* 1654 */;

let jSReanimatedModule;
if (module_1654.shouldBeUseWeb()) {
  const _module1 = _updatePropsJS;
  jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = _mod1677;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;
