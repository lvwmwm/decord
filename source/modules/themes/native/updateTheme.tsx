// Module ID: 15950
// Function ID: 15951
// Name: updateTheme
// Dependencies: [17, 500, 13642, 2]
// Exports: updateTheme

// Module 15950 (updateTheme)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateTheme.tsx");

export const updateTheme = function updateTheme(arg0) {
  if (obj.isAndroid()) {
    let updateThemeResult = importDefault(13642).updateTheme(arg0);
    const obj2 = importDefault(13642);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateThemeResult = DCDTheme.updateTheme(arg0);
  }
  return updateThemeResult;
};
