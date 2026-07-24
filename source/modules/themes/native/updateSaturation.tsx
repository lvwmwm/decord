// Module ID: 13424
// Function ID: 103082
// Name: updateSaturation
// Dependencies: [27, 477, 13425, 2]
// Exports: updateSaturation

// Module 13424 (updateSaturation)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateSaturation.tsx");

export const updateSaturation = function updateSaturation(saturation) {
  if (obj.isAndroid()) {
    let updateSaturationResult = importDefault(13425).updateSaturation(saturation);
    const obj2 = importDefault(13425);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateSaturationResult = DCDTheme.updateSaturation(saturation);
  }
  return updateSaturationResult;
};
