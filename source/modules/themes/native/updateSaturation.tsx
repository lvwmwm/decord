// Module ID: 13814
// Function ID: 13815
// Name: updateSaturation
// Dependencies: [17, 500, 13815, 2]
// Exports: updateSaturation

// Module 13814 (updateSaturation)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateSaturation.tsx");

export const updateSaturation = function updateSaturation(saturation) {
  if (obj.isAndroid()) {
    let updateSaturationResult = importDefault(13815).updateSaturation(saturation);
    const obj2 = importDefault(13815);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateSaturationResult = DCDTheme.updateSaturation(saturation);
  }
  return updateSaturationResult;
};
