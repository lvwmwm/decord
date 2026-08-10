// Module ID: 16034
// Function ID: 16035
// Name: updateTheme
// Dependencies: [17, 500, 13714, 2]
// Exports: updateTheme

// Module 16034 (updateTheme)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateTheme.tsx");

export const updateTheme = function updateTheme(arg0) {
  if (obj.isAndroid()) {
    let updateThemeResult = importDefault(13714).updateTheme(arg0);
    const obj2 = importDefault(13714);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateThemeResult = DCDTheme.updateTheme(arg0);
  }
  return updateThemeResult;
};
