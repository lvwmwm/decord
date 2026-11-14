// Module ID: 1667
// Function ID: 1668
// Name: jSReanimatedModule
// Dependencies: [1668, 1697, 1702]

// Module 1667 (jSReanimatedModule)
import _mod1668 from "module_1668" /* 1668 */;
import _updatePropsJS from "_updatePropsJS" /* 1697 */;
import _mod1702 from "module_1702" /* 1702 */;

let jSReanimatedModule;
if (_mod1668.IS_JEST) {
  const _module = _updatePropsJS;
  jSReanimatedModule = _module.createJSReanimatedModule();
} else {
  const _module1 = _mod1702;
  jSReanimatedModule = _module1.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;
