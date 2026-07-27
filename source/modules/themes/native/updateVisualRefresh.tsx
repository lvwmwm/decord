// Module ID: 15709
// Function ID: 121142
// Name: updateVisualRefresh
// Dependencies: [27, 477, 13437, 2]
// Exports: updateVisualRefresh

// Module 15709 (updateVisualRefresh)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(closure_0) {
  if (obj.isAndroid()) {
    let result = importDefault(13437).setVisualRefreshEnabled(closure_0);
    const obj2 = importDefault(13437);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    result = DCDTheme.setVisualRefreshEnabled(closure_0);
  }
  return result;
};
