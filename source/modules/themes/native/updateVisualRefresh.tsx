// Module ID: 15903
// Function ID: 15904
// Name: updateVisualRefresh
// Dependencies: [17, 500, 13620, 2]
// Exports: updateVisualRefresh

// Module 15903 (updateVisualRefresh)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(closure_0) {
  if (obj.isAndroid()) {
    let result = importDefault(13620).setVisualRefreshEnabled(closure_0);
    const obj2 = importDefault(13620);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    result = DCDTheme.setVisualRefreshEnabled(closure_0);
  }
  return result;
};
