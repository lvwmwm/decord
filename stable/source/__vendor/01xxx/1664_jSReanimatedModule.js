// Module ID: 1664
// Function ID: 1665
// Name: jSReanimatedModule
// Dependencies: [1665, 1694, 1699]

// Module 1664 (jSReanimatedModule)
import _mod1665 from "module_1665" /* 1665 */;
import _updatePropsJS from "_updatePropsJS" /* 1694 */;
import _mod1699 from "module_1699" /* 1699 */;

let jSReanimatedModule;
if (_mod1665.IS_JEST) {
  const _module = _updatePropsJS;
  jSReanimatedModule = _module.createJSReanimatedModule();
} else {
  const _module1 = _mod1699;
  jSReanimatedModule = _module1.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;
