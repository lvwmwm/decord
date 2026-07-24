// Module ID: 15687
// Function ID: 120928
// Name: updateTheme
// Dependencies: [27, 477, 13425, 2]
// Exports: updateTheme

// Module 15687 (updateTheme)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateTheme.tsx");

export const updateTheme = function updateTheme(arg0) {
  if (obj.isAndroid()) {
    let updateThemeResult = importDefault(13425).updateTheme(arg0);
    const obj2 = importDefault(13425);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateThemeResult = DCDTheme.updateTheme(arg0);
  }
  return updateThemeResult;
};
