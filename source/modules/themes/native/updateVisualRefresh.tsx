// Module ID: 15806
// Function ID: 15807
// Name: updateVisualRefresh
// Dependencies: [17, 500, 13523, 2]
// Exports: updateVisualRefresh

// Module 15806 (updateVisualRefresh)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(closure_0) {
  if (obj.isAndroid()) {
    let result = importDefault(13523).setVisualRefreshEnabled(closure_0);
    const obj2 = importDefault(13523);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    result = DCDTheme.setVisualRefreshEnabled(closure_0);
  }
  return result;
};
