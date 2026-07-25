// Module ID: 13435
// Function ID: 103209
// Name: updateSaturation
// Dependencies: [27, 477, 13436, 2]
// Exports: updateSaturation

// Module 13435 (updateSaturation)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateSaturation.tsx");

export const updateSaturation = function updateSaturation(saturation) {
  if (obj.isAndroid()) {
    let updateSaturationResult = importDefault(13436).updateSaturation(saturation);
    const obj2 = importDefault(13436);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateSaturationResult = DCDTheme.updateSaturation(saturation);
  }
  return updateSaturationResult;
};
