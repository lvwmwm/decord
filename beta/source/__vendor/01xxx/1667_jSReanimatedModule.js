// Module ID: 1667
// Function ID: 1668
// Name: jSReanimatedModule
// Dependencies: [1661, 1668, 1684]

// Module 1667 (jSReanimatedModule)
import _updatePropsJS from "_updatePropsJS" /* 1668 */;
import _mod1684 from "module_1684" /* 1684 */;
import module_1661 from "module_1661" /* 1661 */;

let jSReanimatedModule;
if (module_1661.shouldBeUseWeb()) {
  const _module1 = _updatePropsJS;
  jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = _mod1684;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;
