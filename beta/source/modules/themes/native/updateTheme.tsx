// Module ID: 16789
// Function ID: 16790
// Name: updateTheme
// Dependencies: [17, 1364, 14000, 2]
// Exports: updateTheme

// Module 16789 (updateTheme)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import react_nativeDefault from "react-native" /* 14000 */;
import size from "module_2" /* 2 */;

const NativeModules = react_native.NativeModules;
const result = size.fileFinishedImporting("modules/themes/native/updateTheme.tsx");

export const updateTheme = function updateTheme(arg0) {
  let updateThemeResult;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj2 = react_nativeDefault;
    updateThemeResult = obj2.updateTheme(arg0);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateThemeResult = DCDTheme.updateTheme(arg0);
  }
  return updateThemeResult;
};
