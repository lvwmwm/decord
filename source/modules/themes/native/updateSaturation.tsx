// Module ID: 14316
// Function ID: 14317
// Name: updateSaturation
// Dependencies: [17, 1234, 14317, 2]
// Exports: updateSaturation

// Module 14316 (updateSaturation)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import enforcingDefault from "enforcing" /* 14317 */;

const NativeModules = get_ActivityIndicator.NativeModules;
const result = set.fileFinishedImporting("modules/themes/native/updateSaturation.tsx");

export const updateSaturation = function updateSaturation(saturation) {
  if (obj.isAndroid()) {
    let updateSaturationResult = enforcingDefault.updateSaturation(saturation);
    const obj2 = enforcingDefault;
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateSaturationResult = DCDTheme.updateSaturation(saturation);
  }
  return updateSaturationResult;
};
