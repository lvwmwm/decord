// Module ID: 16773
// Function ID: 16774
// Name: updateVisualRefresh
// Dependencies: [17, 1234, 14317, 2]
// Exports: updateVisualRefresh

// Module 16773 (updateVisualRefresh)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import enforcingDefault from "enforcing" /* 14317 */;

const NativeModules = get_ActivityIndicator.NativeModules;
let result = set.fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(arg0) {
  if (obj.isAndroid()) {
    let result = enforcingDefault.setVisualRefreshEnabled(arg0);
    const obj2 = enforcingDefault;
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    result = DCDTheme.setVisualRefreshEnabled(arg0);
  }
  return result;
};
