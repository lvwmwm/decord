// Module ID: 15748
// Function ID: 121298
// Name: updateVisualRefresh
// Dependencies: [27, 477, 13481, 2]
// Exports: updateVisualRefresh

// Module 15748 (updateVisualRefresh)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(closure_0) {
  if (obj.isAndroid()) {
    let result = importDefault(13481).setVisualRefreshEnabled(closure_0);
    const obj2 = importDefault(13481);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    result = DCDTheme.setVisualRefreshEnabled(closure_0);
  }
  return result;
};
