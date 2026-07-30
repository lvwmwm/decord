// Module ID: 15778
// Function ID: 15779
// Name: updateVisualRefresh
// Dependencies: [17, 500, 13499, 2]
// Exports: updateVisualRefresh

// Module 15778 (updateVisualRefresh)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(closure_0) {
  if (obj.isAndroid()) {
    let result = importDefault(13499).setVisualRefreshEnabled(closure_0);
    const obj2 = importDefault(13499);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    result = DCDTheme.setVisualRefreshEnabled(closure_0);
  }
  return result;
};
