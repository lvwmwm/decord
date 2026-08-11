// Module ID: 16050
// Function ID: 16051
// Name: updateVisualRefresh
// Dependencies: [17, 500, 13722, 2]
// Exports: updateVisualRefresh

// Module 16050 (updateVisualRefresh)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(closure_0) {
  if (obj.isAndroid()) {
    let result = importDefault(13722).setVisualRefreshEnabled(closure_0);
    const obj2 = importDefault(13722);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    result = DCDTheme.setVisualRefreshEnabled(closure_0);
  }
  return result;
};
