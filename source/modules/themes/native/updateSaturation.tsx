// Module ID: 13782
// Function ID: 13783
// Name: updateSaturation
// Dependencies: [17, 500, 13783, 2]
// Exports: updateSaturation

// Module 13782 (updateSaturation)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateSaturation.tsx");

export const updateSaturation = function updateSaturation(saturation) {
  if (obj.isAndroid()) {
    let updateSaturationResult = importDefault(13783).updateSaturation(saturation);
    const obj2 = importDefault(13783);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateSaturationResult = DCDTheme.updateSaturation(saturation);
  }
  return updateSaturationResult;
};
