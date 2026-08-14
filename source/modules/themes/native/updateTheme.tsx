// Module ID: 16127
// Function ID: 16128
// Name: updateTheme
// Dependencies: [17, 500, 13783, 2]
// Exports: updateTheme

// Module 16127 (updateTheme)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateTheme.tsx");

export const updateTheme = function updateTheme(arg0) {
  if (obj.isAndroid()) {
    let updateThemeResult = importDefault(13783).updateTheme(arg0);
    const obj2 = importDefault(13783);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateThemeResult = DCDTheme.updateTheme(arg0);
  }
  return updateThemeResult;
};
