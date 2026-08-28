// Module ID: 16468
// Function ID: 16469
// Name: updateVisualRefresh
// Dependencies: [17, 500, 14027, 2]
// Exports: updateVisualRefresh

// Module 16468 (updateVisualRefresh)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import enforcingDefault from "enforcing" /* 14027 */;

const NativeModules = get_ActivityIndicator.NativeModules;
let result = set.fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(closure_0) {
  if (obj.isAndroid()) {
    let result = enforcingDefault.setVisualRefreshEnabled(closure_0);
    const obj2 = enforcingDefault;
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    result = DCDTheme.setVisualRefreshEnabled(closure_0);
  }
  return result;
};
