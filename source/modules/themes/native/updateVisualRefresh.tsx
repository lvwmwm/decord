// Module ID: 15639
// Function ID: 120604
// Name: updateVisualRefresh
// Dependencies: [27, 477, 13372, 2]
// Exports: updateVisualRefresh

// Module 15639 (updateVisualRefresh)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(closure_0) {
  if (obj.isAndroid()) {
    let result = importDefault(13372).setVisualRefreshEnabled(closure_0);
    const obj2 = importDefault(13372);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    result = DCDTheme.setVisualRefreshEnabled(closure_0);
  }
  return result;
};
