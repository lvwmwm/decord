// Module ID: 1665
// Function ID: 1666
// Name: jSReanimatedModule
// Dependencies: [1659, 1666, 1682]

// Module 1665 (jSReanimatedModule)
import _updatePropsJS from "_updatePropsJS" /* 1666 */;
import _mod1682 from "module_1682" /* 1682 */;
import module_1659 from "module_1659" /* 1659 */;

let jSReanimatedModule;
if (module_1659.shouldBeUseWeb()) {
  const _module1 = _updatePropsJS;
  jSReanimatedModule = _module1.createJSReanimatedModule();
} else {
  const _module2 = _mod1682;
  jSReanimatedModule = _module2.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;
