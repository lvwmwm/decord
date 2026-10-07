// Module ID: 4587
// Function ID: 4588
// Name: themes
// Dependencies: [1096, 2]
// Exports: isThemeDark, isThemeLight

// Module 4587 (themes)
import Constants from "Constants" /* 1096 */;
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
