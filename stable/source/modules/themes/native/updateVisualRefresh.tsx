// Module ID: 16790
// Function ID: 16791
// Name: updateVisualRefresh
// Dependencies: [17, 1370, 14002, 2]
// Exports: updateVisualRefresh

// Module 16790 (updateVisualRefresh)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import react_nativeDefault from "react-native" /* 14002 */;
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
