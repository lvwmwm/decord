// Module ID: 15697
// Function ID: 121095
// Name: updateVisualRefresh
// Dependencies: [27, 477, 13436, 2]
// Exports: updateVisualRefresh

// Module 15697 (updateVisualRefresh)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(closure_0) {
  if (obj.isAndroid()) {
    let result = importDefault(13436).setVisualRefreshEnabled(closure_0);
    const obj2 = importDefault(13436);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    result = DCDTheme.setVisualRefreshEnabled(closure_0);
  }
  return result;
};
