// Module ID: 1659
// Function ID: 1660
// Name: jSReanimatedModule
// Dependencies: [1653, 1660, 1676]

// Module 1659 (jSReanimatedModule)
import _updatePropsJS from "_updatePropsJS" /* 1660 */;
import _mod1676 from "module_1676" /* 1676 */;
import module_1653 from "module_1653" /* 1653 */;

let jSReanimatedModule;
if (module_1653.shouldBeUseWeb()) {
  const _module1 = _updatePropsJS;
  jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = _mod1676;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;
