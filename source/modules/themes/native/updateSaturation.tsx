// Module ID: 13778
// Function ID: 13779
// Name: updateSaturation
// Dependencies: [17, 500, 13779, 2]
// Exports: updateSaturation

// Module 13778 (updateSaturation)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateSaturation.tsx");

export const updateSaturation = function updateSaturation(saturation) {
  if (obj.isAndroid()) {
    let updateSaturationResult = importDefault(13779).updateSaturation(saturation);
    const obj2 = importDefault(13779);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateSaturationResult = DCDTheme.updateSaturation(saturation);
  }
  return updateSaturationResult;
};
