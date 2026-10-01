// Module ID: 16788
// Function ID: 16789
// Name: updateVisualRefresh
// Dependencies: [17, 1364, 14000, 2]
// Exports: updateVisualRefresh

// Module 16788 (updateVisualRefresh)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import react_nativeDefault from "react-native" /* 14000 */;
import size from "module_2" /* 2 */;

const NativeModules = react_native.NativeModules;
let result = size.fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(arg0) {
  let result;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj2 = react_nativeDefault;
    result = obj2.setVisualRefreshEnabled(arg0);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    result = DCDTheme.setVisualRefreshEnabled(arg0);
  }
  return result;
};
