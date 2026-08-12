// Module ID: 16108
// Function ID: 16109
// Name: updateTheme
// Dependencies: [17, 500, 13779, 2]
// Exports: updateTheme

// Module 16108 (updateTheme)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateTheme.tsx");

export const updateTheme = function updateTheme(arg0) {
  if (obj.isAndroid()) {
    let updateThemeResult = importDefault(13779).updateTheme(arg0);
    const obj2 = importDefault(13779);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateThemeResult = DCDTheme.updateTheme(arg0);
  }
  return updateThemeResult;
};
