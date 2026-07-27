// Module ID: 13436
// Function ID: 103214
// Name: updateSaturation
// Dependencies: [27, 477, 13437, 2]
// Exports: updateSaturation

// Module 13436 (updateSaturation)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateSaturation.tsx");

export const updateSaturation = function updateSaturation(saturation) {
  if (obj.isAndroid()) {
    let updateSaturationResult = importDefault(13437).updateSaturation(saturation);
    const obj2 = importDefault(13437);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateSaturationResult = DCDTheme.updateSaturation(saturation);
  }
  return updateSaturationResult;
};
