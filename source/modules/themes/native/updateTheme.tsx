// Module ID: 15640
// Function ID: 120606
// Name: updateTheme
// Dependencies: [27, 477, 13372, 2]
// Exports: updateTheme

// Module 15640 (updateTheme)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateTheme.tsx");

export const updateTheme = function updateTheme(arg0) {
  if (obj.isAndroid()) {
    let updateThemeResult = importDefault(13372).updateTheme(arg0);
    const obj2 = importDefault(13372);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateThemeResult = DCDTheme.updateTheme(arg0);
  }
  return updateThemeResult;
};
