// Module ID: 13641
// Function ID: 13642
// Name: updateSaturation
// Dependencies: [17, 500, 13642, 2]
// Exports: updateSaturation

// Module 13641 (updateSaturation)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateSaturation.tsx");

export const updateSaturation = function updateSaturation(saturation) {
  if (obj.isAndroid()) {
    let updateSaturationResult = importDefault(13642).updateSaturation(saturation);
    const obj2 = importDefault(13642);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateSaturationResult = DCDTheme.updateSaturation(saturation);
  }
  return updateSaturationResult;
};
