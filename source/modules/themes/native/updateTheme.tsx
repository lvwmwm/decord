// Module ID: 15779
// Function ID: 15780
// Name: updateTheme
// Dependencies: [17, 500, 13499, 2]
// Exports: updateTheme

// Module 15779 (updateTheme)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateTheme.tsx");

export const updateTheme = function updateTheme(arg0) {
  if (obj.isAndroid()) {
    let updateThemeResult = importDefault(13499).updateTheme(arg0);
    const obj2 = importDefault(13499);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateThemeResult = DCDTheme.updateTheme(arg0);
  }
  return updateThemeResult;
};
