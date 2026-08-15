// Module ID: 16177
// Function ID: 16178
// Name: updateTheme
// Dependencies: [17, 500, 13815, 2]
// Exports: updateTheme

// Module 16177 (updateTheme)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateTheme.tsx");

export const updateTheme = function updateTheme(arg0) {
  if (obj.isAndroid()) {
    let updateThemeResult = importDefault(13815).updateTheme(arg0);
    const obj2 = importDefault(13815);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateThemeResult = DCDTheme.updateTheme(arg0);
  }
  return updateThemeResult;
};
