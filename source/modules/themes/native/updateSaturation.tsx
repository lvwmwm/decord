// Module ID: 13503
// Function ID: 13504
// Name: updateSaturation
// Dependencies: [17, 500, 13504, 2]
// Exports: updateSaturation

// Module 13503 (updateSaturation)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateSaturation.tsx");

export const updateSaturation = function updateSaturation(saturation) {
  if (obj.isAndroid()) {
    let updateSaturationResult = importDefault(13504).updateSaturation(saturation);
    const obj2 = importDefault(13504);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateSaturationResult = DCDTheme.updateSaturation(saturation);
  }
  return updateSaturationResult;
};
