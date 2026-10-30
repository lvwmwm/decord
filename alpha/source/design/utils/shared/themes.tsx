// Module ID: 5031
// Function ID: 5032
// Name: themes
// Dependencies: [1083, 2]
// Exports: isThemeDark, isThemeLight

// Module 5031 (themes)
import Constants from "Constants" /* 1083 */;
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
