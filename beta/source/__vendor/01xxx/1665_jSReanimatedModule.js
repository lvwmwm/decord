// Module ID: 1665
// Function ID: 1666
// Name: jSReanimatedModule
// Dependencies: [1666, 1695, 1700]

// Module 1665 (jSReanimatedModule)
import _mod1666 from "module_1666" /* 1666 */;
import _updatePropsJS from "_updatePropsJS" /* 1695 */;
import _mod1700 from "module_1700" /* 1700 */;

let jSReanimatedModule;
if (_mod1666.IS_JEST) {
  const _module = _updatePropsJS;
  jSReanimatedModule = _module.createJSReanimatedModule();
} else {
  const _module1 = _mod1700;
  jSReanimatedModule = _module1.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;
