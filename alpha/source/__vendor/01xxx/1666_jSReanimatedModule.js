// Module ID: 1666
// Function ID: 1667
// Name: jSReanimatedModule
// Dependencies: [1667, 1696, 1701]

// Module 1666 (jSReanimatedModule)
import _mod1667 from "module_1667" /* 1667 */;
import _updatePropsJS from "_updatePropsJS" /* 1696 */;
import _mod1701 from "module_1701" /* 1701 */;

let jSReanimatedModule;
if (_mod1667.IS_JEST) {
  const _module = _updatePropsJS;
  jSReanimatedModule = _module.createJSReanimatedModule();
} else {
  const _module1 = _mod1701;
  jSReanimatedModule = _module1.createNativeReanimatedModule();
}

export const ReanimatedModule = jSReanimatedModule;
