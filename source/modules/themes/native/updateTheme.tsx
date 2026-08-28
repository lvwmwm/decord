// Module ID: 16469
// Function ID: 16470
// Name: updateTheme
// Dependencies: [17, 500, 14027, 2]
// Exports: updateTheme

// Module 16469 (updateTheme)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import enforcingDefault from "enforcing" /* 14027 */;

const NativeModules = get_ActivityIndicator.NativeModules;
const result = set.fileFinishedImporting("modules/themes/native/updateTheme.tsx");

export const updateTheme = function updateTheme(arg0) {
  if (obj.isAndroid()) {
    let updateThemeResult = enforcingDefault.updateTheme(arg0);
    const obj2 = enforcingDefault;
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateThemeResult = DCDTheme.updateTheme(arg0);
  }
  return updateThemeResult;
};
