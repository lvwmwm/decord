// Module ID: 15870
// Function ID: 15871
// Name: updateVisualRefresh
// Dependencies: [17, 500, 13586, 2]
// Exports: updateVisualRefresh

// Module 15870 (updateVisualRefresh)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(closure_0) {
  if (obj.isAndroid()) {
    let result = importDefault(13586).setVisualRefreshEnabled(closure_0);
    const obj2 = importDefault(13586);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    result = DCDTheme.setVisualRefreshEnabled(closure_0);
  }
  return result;
};
