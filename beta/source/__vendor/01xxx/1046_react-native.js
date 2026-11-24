// Module ID: 1046
// Function ID: 1047
// Name: react-native
// Dependencies: [17, 867]
// Exports: shouldEnableNativeNagger

// Module 1046 (react-native)
import react_native from "react-native" /* 17 */;
import _mod867 from "module_867" /* 867 */;

const Platform = react_native.Platform;

export function shouldEnableNativeNagger(enableNativeNagger) {
  let tmp = enableNativeNagger;
  if (typeof enableNativeNagger !== "boolean") {
    const obj = _mod867;
    tmp = !obj.isExpoGo();
  }
  return tmp;
}
