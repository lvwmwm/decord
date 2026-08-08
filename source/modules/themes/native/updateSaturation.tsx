// Module ID: 13711
// Function ID: 13712
// Name: updateSaturation
// Dependencies: [17, 500, 13712, 2]
// Exports: updateSaturation

// Module 13711 (updateSaturation)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateSaturation.tsx");

export const updateSaturation = function updateSaturation(saturation) {
  if (obj.isAndroid()) {
    let updateSaturationResult = importDefault(13712).updateSaturation(saturation);
    const obj2 = importDefault(13712);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateSaturationResult = DCDTheme.updateSaturation(saturation);
  }
  return updateSaturationResult;
};
