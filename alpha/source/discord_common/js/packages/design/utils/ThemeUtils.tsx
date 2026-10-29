// Module ID: 5021
// Function ID: 5022
// Name: ThemeUtils
// Dependencies: [588, 2]
// Exports: isThemeDark, isThemeLight

// Module 5021 (ThemeUtils)
import ThemeTypes from "ThemeTypes" /* 588 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/design/utils/ThemeUtils.tsx");

export function isThemeLight(arg0) {
  return arg0 === ThemeTypes.ThemeTypes.LIGHT;
}
export function isThemeDark(arg0) {
  if (ThemeTypes.ThemeTypes.ASH !== arg0) {
    if (ThemeTypes.ThemeTypes.ONYX !== arg0) {
      if (ThemeTypes.ThemeTypes.DARK !== arg0) {
        return false;
      }
    }
  }
  return true;
}
