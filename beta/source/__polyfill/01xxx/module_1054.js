// Module ID: 1054
// Function ID: 1055
// Dependencies: [17, 871]
// Exports: shouldEnableNativeNagger

// Module 1054
import _mod17 from "module_17" /* 17 */;
import _mod871 from "module_871" /* 871 */;

const Platform = _mod17.Platform;

export const shouldEnableNativeNagger = function shouldEnableNativeNagger(enableNativeNagger) {
  let tmp = enableNativeNagger;
  if (typeof enableNativeNagger !== "boolean") {
    tmp = !_mod871.isExpoGo();
  }
  return tmp;
};
