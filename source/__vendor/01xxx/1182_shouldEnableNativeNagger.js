// Module ID: 1182
// Function ID: 1183
// Name: shouldEnableNativeNagger
// Dependencies: [17, 999]
// Exports: shouldEnableNativeNagger

// Module 1182 (shouldEnableNativeNagger)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import isHermesEnabled from "isHermesEnabled" /* 999 */;

const Platform = get_ActivityIndicator.Platform;

export const shouldEnableNativeNagger = function shouldEnableNativeNagger(enableNativeNagger) {
  let tmp = enableNativeNagger;
  if (typeof enableNativeNagger !== "boolean") {
    tmp = !isHermesEnabled.isExpoGo();
    const obj = isHermesEnabled;
  }
  return tmp;
};
