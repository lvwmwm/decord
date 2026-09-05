// Module ID: 1050
// Function ID: 1051
// Name: shouldEnableNativeNagger
// Dependencies: [17, 867]
// Exports: shouldEnableNativeNagger

// Module 1050 (shouldEnableNativeNagger)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import isHermesEnabled from "isHermesEnabled" /* 867 */;

const Platform = get_ActivityIndicator.Platform;

export const shouldEnableNativeNagger = function shouldEnableNativeNagger(enableNativeNagger) {
  let tmp = enableNativeNagger;
  if (typeof enableNativeNagger !== "boolean") {
    tmp = !isHermesEnabled.isExpoGo();
    const obj = isHermesEnabled;
  }
  return tmp;
};
