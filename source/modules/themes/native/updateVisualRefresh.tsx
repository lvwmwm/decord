// Module ID: 16126
// Function ID: 16127
// Name: updateVisualRefresh
// Dependencies: [17, 500, 13783, 2]
// Exports: updateVisualRefresh

// Module 16126 (updateVisualRefresh)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(closure_0) {
  if (obj.isAndroid()) {
    let result = importDefault(13783).setVisualRefreshEnabled(closure_0);
    const obj2 = importDefault(13783);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    result = DCDTheme.setVisualRefreshEnabled(closure_0);
  }
  return result;
};
