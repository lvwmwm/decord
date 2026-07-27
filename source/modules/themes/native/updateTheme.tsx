// Module ID: 15710
// Function ID: 121144
// Name: updateTheme
// Dependencies: [27, 477, 13437, 2]
// Exports: updateTheme

// Module 15710 (updateTheme)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateTheme.tsx");

export const updateTheme = function updateTheme(arg0) {
  if (obj.isAndroid()) {
    let updateThemeResult = importDefault(13437).updateTheme(arg0);
    const obj2 = importDefault(13437);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateThemeResult = DCDTheme.updateTheme(arg0);
  }
  return updateThemeResult;
};
