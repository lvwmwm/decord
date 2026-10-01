// Module ID: 13999
// Function ID: 14000
// Name: updateSaturation
// Dependencies: [17, 1364, 14000, 2]
// Exports: updateSaturation

// Module 13999 (updateSaturation)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import react_nativeDefault from "react-native" /* 14000 */;
import size from "module_2" /* 2 */;

const NativeModules = react_native.NativeModules;
const result = size.fileFinishedImporting("modules/themes/native/updateSaturation.tsx");

export const updateSaturation = function updateSaturation(saturation) {
  let updateSaturationResult;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj2 = react_nativeDefault;
    updateSaturationResult = obj2.updateSaturation(saturation);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateSaturationResult = DCDTheme.updateSaturation(saturation);
  }
  return updateSaturationResult;
};
