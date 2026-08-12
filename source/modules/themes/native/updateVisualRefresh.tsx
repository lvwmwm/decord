// Module ID: 16107
// Function ID: 16108
// Name: updateVisualRefresh
// Dependencies: [17, 500, 13779, 2]
// Exports: updateVisualRefresh

// Module 16107 (updateVisualRefresh)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(closure_0) {
  if (obj.isAndroid()) {
    let result = importDefault(13779).setVisualRefreshEnabled(closure_0);
    const obj2 = importDefault(13779);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    result = DCDTheme.setVisualRefreshEnabled(closure_0);
  }
  return result;
};
