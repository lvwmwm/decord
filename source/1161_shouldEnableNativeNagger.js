// Module ID: 1161
// Function ID: 13205
// Name: shouldEnableNativeNagger
// Dependencies: [27, 978]
// Exports: shouldEnableNativeNagger

// Module 1161 (shouldEnableNativeNagger)
import { Platform } from "get ActivityIndicator";


export const shouldEnableNativeNagger = function shouldEnableNativeNagger(enableNativeNagger) {
  let tmp = enableNativeNagger;
  if ("boolean" !== typeof enableNativeNagger) {
    tmp = !require(978) /* isHermesEnabled */.isExpoGo();
    const obj = require(978) /* isHermesEnabled */;
  }
  return tmp;
};
