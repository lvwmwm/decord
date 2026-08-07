// Module ID: 15949
// Function ID: 15950
// Name: updateVisualRefresh
// Dependencies: [17, 500, 13642, 2]
// Exports: updateVisualRefresh

// Module 15949 (updateVisualRefresh)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(closure_0) {
  if (obj.isAndroid()) {
    let result = importDefault(13642).setVisualRefreshEnabled(closure_0);
    const obj2 = importDefault(13642);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    result = DCDTheme.setVisualRefreshEnabled(closure_0);
  }
  return result;
};
