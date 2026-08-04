// Module ID: 15902
// Function ID: 15903
// Name: updateVisualRefresh
// Dependencies: [17, 500, 13619, 2]
// Exports: updateVisualRefresh

// Module 15902 (updateVisualRefresh)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(closure_0) {
  if (obj.isAndroid()) {
    let result = importDefault(13619).setVisualRefreshEnabled(closure_0);
    const obj2 = importDefault(13619);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    result = DCDTheme.setVisualRefreshEnabled(closure_0);
  }
  return result;
};
