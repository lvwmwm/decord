// Module ID: 15884
// Function ID: 15885
// Name: updateTheme
// Dependencies: [17, 500, 13591, 2]
// Exports: updateTheme

// Module 15884 (updateTheme)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateTheme.tsx");

export const updateTheme = function updateTheme(arg0) {
  if (obj.isAndroid()) {
    let updateThemeResult = importDefault(13591).updateTheme(arg0);
    const obj2 = importDefault(13591);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateThemeResult = DCDTheme.updateTheme(arg0);
  }
  return updateThemeResult;
};
