// Module ID: 4967
// Function ID: 4968
// Name: themes
// Dependencies: [1098, 2]
// Exports: isThemeDark, isThemeLight

// Module 4967 (themes)
import Constants from "Constants" /* 1098 */;
import size from "module_2" /* 2 */;

const ThemeTypes = Constants.ThemeTypes;
const result = size.fileFinishedImporting("design/utils/shared/themes.tsx");

export const isThemeLight = function isThemeLight(arg0) {
  return arg0 === ThemeTypes.LIGHT;
};
export const isThemeDark = function isThemeDark(arg0) {
  if (ThemeTypes.ASH !== arg0) {
    if (ThemeTypes.ONYX !== arg0) {
      if (ThemeTypes.DARK !== arg0) {
        return false;
      }
    }
  }
  return true;
};
