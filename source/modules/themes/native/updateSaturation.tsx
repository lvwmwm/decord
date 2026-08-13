// Module ID: 13779
// Function ID: 13780
// Name: updateSaturation
// Dependencies: [17, 500, 13780, 2]
// Exports: updateSaturation

// Module 13779 (updateSaturation)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateSaturation.tsx");

export const updateSaturation = function updateSaturation(saturation) {
  if (obj.isAndroid()) {
    let updateSaturationResult = importDefault(13780).updateSaturation(saturation);
    const obj2 = importDefault(13780);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateSaturationResult = DCDTheme.updateSaturation(saturation);
  }
  return updateSaturationResult;
};
