// Module ID: 16051
// Function ID: 16052
// Name: updateTheme
// Dependencies: [17, 500, 13722, 2]
// Exports: updateTheme

// Module 16051 (updateTheme)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateTheme.tsx");

export const updateTheme = function updateTheme(arg0) {
  if (obj.isAndroid()) {
    let updateThemeResult = importDefault(13722).updateTheme(arg0);
    const obj2 = importDefault(13722);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateThemeResult = DCDTheme.updateTheme(arg0);
  }
  return updateThemeResult;
};
