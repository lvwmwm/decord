// Module ID: 13590
// Function ID: 13591
// Name: updateSaturation
// Dependencies: [17, 500, 13591, 2]
// Exports: updateSaturation

// Module 13590 (updateSaturation)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateSaturation.tsx");

export const updateSaturation = function updateSaturation(saturation) {
  if (obj.isAndroid()) {
    let updateSaturationResult = importDefault(13591).updateSaturation(saturation);
    const obj2 = importDefault(13591);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateSaturationResult = DCDTheme.updateSaturation(saturation);
  }
  return updateSaturationResult;
};
