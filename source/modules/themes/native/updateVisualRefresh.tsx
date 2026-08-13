// Module ID: 16117
// Function ID: 16118
// Name: updateVisualRefresh
// Dependencies: [17, 500, 13780, 2]
// Exports: updateVisualRefresh

// Module 16117 (updateVisualRefresh)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(closure_0) {
  if (obj.isAndroid()) {
    let result = importDefault(13780).setVisualRefreshEnabled(closure_0);
    const obj2 = importDefault(13780);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    result = DCDTheme.setVisualRefreshEnabled(closure_0);
  }
  return result;
};
