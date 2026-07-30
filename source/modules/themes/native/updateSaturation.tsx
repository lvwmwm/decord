// Module ID: 13498
// Function ID: 13499
// Name: updateSaturation
// Dependencies: [17, 500, 13499, 2]
// Exports: updateSaturation

// Module 13498 (updateSaturation)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateSaturation.tsx");

export const updateSaturation = function updateSaturation(saturation) {
  if (obj.isAndroid()) {
    let updateSaturationResult = importDefault(13499).updateSaturation(saturation);
    const obj2 = importDefault(13499);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateSaturationResult = DCDTheme.updateSaturation(saturation);
  }
  return updateSaturationResult;
};
