// Module ID: 4501
// Function ID: 4502
// Name: themes
// Dependencies: [1089, 2]
// Exports: isThemeDark, isThemeLight

// Module 4501 (themes)
import Constants from "Constants" /* 1089 */;
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
