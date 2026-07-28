// Module ID: 13480
// Function ID: 103387
// Name: updateSaturation
// Dependencies: [27, 477, 13481, 2]
// Exports: updateSaturation

// Module 13480 (updateSaturation)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateSaturation.tsx");

export const updateSaturation = function updateSaturation(saturation) {
  if (obj.isAndroid()) {
    let updateSaturationResult = importDefault(13481).updateSaturation(saturation);
    const obj2 = importDefault(13481);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateSaturationResult = DCDTheme.updateSaturation(saturation);
  }
  return updateSaturationResult;
};
