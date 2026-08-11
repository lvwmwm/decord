// Module ID: 13721
// Function ID: 13722
// Name: updateSaturation
// Dependencies: [17, 500, 13722, 2]
// Exports: updateSaturation

// Module 13721 (updateSaturation)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateSaturation.tsx");

export const updateSaturation = function updateSaturation(saturation) {
  if (obj.isAndroid()) {
    let updateSaturationResult = importDefault(13722).updateSaturation(saturation);
    const obj2 = importDefault(13722);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateSaturationResult = DCDTheme.updateSaturation(saturation);
  }
  return updateSaturationResult;
};
