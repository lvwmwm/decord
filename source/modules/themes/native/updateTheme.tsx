// Module ID: 15904
// Function ID: 15905
// Name: updateTheme
// Dependencies: [17, 500, 13620, 2]
// Exports: updateTheme

// Module 15904 (updateTheme)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateTheme.tsx");

export const updateTheme = function updateTheme(arg0) {
  if (obj.isAndroid()) {
    let updateThemeResult = importDefault(13620).updateTheme(arg0);
    const obj2 = importDefault(13620);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateThemeResult = DCDTheme.updateTheme(arg0);
  }
  return updateThemeResult;
};
