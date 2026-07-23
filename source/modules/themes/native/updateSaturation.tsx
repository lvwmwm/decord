// Module ID: 13371
// Function ID: 102755
// Name: updateSaturation
// Dependencies: [27, 477, 13372, 2]
// Exports: updateSaturation

// Module 13371 (updateSaturation)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateSaturation.tsx");

export const updateSaturation = function updateSaturation(saturation) {
  if (obj.isAndroid()) {
    let updateSaturationResult = importDefault(13372).updateSaturation(saturation);
    const obj2 = importDefault(13372);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateSaturationResult = DCDTheme.updateSaturation(saturation);
  }
  return updateSaturationResult;
};
