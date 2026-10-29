// Module ID: 1059
// Function ID: 1060
// Name: react-native
// Dependencies: [17, 879]
// Exports: shouldEnableNativeNagger

// Module 1059 (react-native)
import react_native from "react-native" /* 17 */;
import _mod879 from "module_879" /* 879 */;

const Platform = react_native.Platform;

export function shouldEnableNativeNagger(enableNativeNagger) {
  let tmp = enableNativeNagger;
  if (typeof enableNativeNagger !== "boolean") {
    const obj = _mod879;
    tmp = !obj.isExpoGo();
  }
  return tmp;
}
