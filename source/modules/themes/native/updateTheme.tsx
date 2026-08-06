// Module ID: 15924
// Function ID: 15925
// Name: updateTheme
// Dependencies: [17, 500, 13628, 2]
// Exports: updateTheme

// Module 15924 (updateTheme)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateTheme.tsx");

export const updateTheme = function updateTheme(arg0) {
  if (obj.isAndroid()) {
    let updateThemeResult = importDefault(13628).updateTheme(arg0);
    const obj2 = importDefault(13628);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateThemeResult = DCDTheme.updateTheme(arg0);
  }
  return updateThemeResult;
};
