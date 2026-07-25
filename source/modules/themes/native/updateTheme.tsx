// Module ID: 15698
// Function ID: 121097
// Name: updateTheme
// Dependencies: [27, 477, 13436, 2]
// Exports: updateTheme

// Module 15698 (updateTheme)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateTheme.tsx");

export const updateTheme = function updateTheme(arg0) {
  if (obj.isAndroid()) {
    let updateThemeResult = importDefault(13436).updateTheme(arg0);
    const obj2 = importDefault(13436);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateThemeResult = DCDTheme.updateTheme(arg0);
  }
  return updateThemeResult;
};
