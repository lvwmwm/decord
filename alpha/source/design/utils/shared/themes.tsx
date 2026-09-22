// Module ID: 4465
// Function ID: 4466
// Name: themes
// Dependencies: [1085, 2]
// Exports: isThemeDark, isThemeLight

// Module 4465 (themes)
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const ThemeTypes = Constants.ThemeTypes;
const result = size.fileFinishedImporting("design/utils/shared/themes.tsx");

export const isThemeLight = function isThemeLight(arg0) {
  return arg0 === ThemeTypes.LIGHT;
};
export const isThemeDark = function isThemeDark(arg0) {
  if (ThemeTypes.ASH !== arg0) {
    if (tmp.ONYX !== arg0) {
      if (tmp.DARK !== arg0) {
        return false;
      }
    }
  }
  return true;
};
