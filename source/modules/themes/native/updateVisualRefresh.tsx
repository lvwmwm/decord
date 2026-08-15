// Module ID: 16176
// Function ID: 16177
// Name: updateVisualRefresh
// Dependencies: [17, 500, 13815, 2]
// Exports: updateVisualRefresh

// Module 16176 (updateVisualRefresh)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(closure_0) {
  if (obj.isAndroid()) {
    let result = importDefault(13815).setVisualRefreshEnabled(closure_0);
    const obj2 = importDefault(13815);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    result = DCDTheme.setVisualRefreshEnabled(closure_0);
  }
  return result;
};
