// Module ID: 13770
// Function ID: 13771
// Name: updateSaturation
// Dependencies: [17, 500, 13771, 2]
// Exports: updateSaturation

// Module 13770 (updateSaturation)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateSaturation.tsx");

export const updateSaturation = function updateSaturation(saturation) {
  if (obj.isAndroid()) {
    let updateSaturationResult = importDefault(13771).updateSaturation(saturation);
    const obj2 = importDefault(13771);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateSaturationResult = DCDTheme.updateSaturation(saturation);
  }
  return updateSaturationResult;
};
