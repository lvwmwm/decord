// Module ID: 16025
// Function ID: 16026
// Name: updateTheme
// Dependencies: [17, 500, 13712, 2]
// Exports: updateTheme

// Module 16025 (updateTheme)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateTheme.tsx");

export const updateTheme = function updateTheme(arg0) {
  if (obj.isAndroid()) {
    let updateThemeResult = importDefault(13712).updateTheme(arg0);
    const obj2 = importDefault(13712);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateThemeResult = DCDTheme.updateTheme(arg0);
  }
  return updateThemeResult;
};
