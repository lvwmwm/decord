// Module ID: 13627
// Function ID: 13628
// Name: updateSaturation
// Dependencies: [17, 500, 13628, 2]
// Exports: updateSaturation

// Module 13627 (updateSaturation)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateSaturation.tsx");

export const updateSaturation = function updateSaturation(saturation) {
  if (obj.isAndroid()) {
    let updateSaturationResult = importDefault(13628).updateSaturation(saturation);
    const obj2 = importDefault(13628);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateSaturationResult = DCDTheme.updateSaturation(saturation);
  }
  return updateSaturationResult;
};
