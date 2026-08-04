// Module ID: 13618
// Function ID: 13619
// Name: updateSaturation
// Dependencies: [17, 500, 13619, 2]
// Exports: updateSaturation

// Module 13618 (updateSaturation)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateSaturation.tsx");

export const updateSaturation = function updateSaturation(saturation) {
  if (obj.isAndroid()) {
    let updateSaturationResult = importDefault(13619).updateSaturation(saturation);
    const obj2 = importDefault(13619);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateSaturationResult = DCDTheme.updateSaturation(saturation);
  }
  return updateSaturationResult;
};
