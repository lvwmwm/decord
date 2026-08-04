// Module ID: 1185
// Function ID: 1186
// Name: shouldEnableNativeNagger
// Dependencies: [17, 1002]
// Exports: shouldEnableNativeNagger

// Module 1185 (shouldEnableNativeNagger)
import { Platform } from "get ActivityIndicator";


export const shouldEnableNativeNagger = function shouldEnableNativeNagger(enableNativeNagger) {
  let tmp = enableNativeNagger;
  if (typeof enableNativeNagger !== "boolean") {
    tmp = !require(1002) /* isHermesEnabled */.isExpoGo();
    const obj = require(1002) /* isHermesEnabled */;
  }
  return tmp;
};
