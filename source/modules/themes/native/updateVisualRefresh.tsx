// Module ID: 15784
// Function ID: 15785
// Name: updateVisualRefresh
// Dependencies: [17, 500, 13504, 2]
// Exports: updateVisualRefresh

// Module 15784 (updateVisualRefresh)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(closure_0) {
  if (obj.isAndroid()) {
    let result = importDefault(13504).setVisualRefreshEnabled(closure_0);
    const obj2 = importDefault(13504);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    result = DCDTheme.setVisualRefreshEnabled(closure_0);
  }
  return result;
};
