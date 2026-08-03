// Module ID: 13585
// Function ID: 13586
// Name: updateSaturation
// Dependencies: [17, 500, 13586, 2]
// Exports: updateSaturation

// Module 13585 (updateSaturation)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateSaturation.tsx");

export const updateSaturation = function updateSaturation(saturation) {
  if (obj.isAndroid()) {
    let updateSaturationResult = importDefault(13586).updateSaturation(saturation);
    const obj2 = importDefault(13586);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateSaturationResult = DCDTheme.updateSaturation(saturation);
  }
  return updateSaturationResult;
};
