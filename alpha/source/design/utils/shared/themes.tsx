// Module ID: 5034
// Function ID: 5035
// Name: themes
// Dependencies: [1082, 2]
// Exports: isThemeDark, isThemeLight

// Module 5034 (themes)
import Constants from "Constants" /* 1082 */;
import size from "module_2" /* 2 */;

const ThemeTypes = Constants.ThemeTypes;
const result = size.fileFinishedImporting("design/utils/shared/themes.tsx");

export function isThemeLight(arg0) {
  return arg0 === ThemeTypes.LIGHT;
}
export function isThemeDark(arg0) {
  if (ThemeTypes.ASH !== arg0) {
    if (ThemeTypes.ONYX !== arg0) {
      if (ThemeTypes.DARK !== arg0) {
        return false;
      }
    }
  }
  return true;
}
