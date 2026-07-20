// Module ID: 3838
// Function ID: 32002
// Name: isThemeLight
// Dependencies: []
// Exports: isThemeDark, isThemeLight

// Module 3838 (isThemeLight)
const ThemeTypes = require(dependencyMap[0]).ThemeTypes;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("design/utils/shared/themes.tsx");

export const isThemeLight = function isThemeLight(arg0) {
  return arg0 === ThemeTypes.LIGHT;
};
export const isThemeDark = function isThemeDark(arg0) {
  if (ThemeTypes.DARK !== arg0) {
    if (ThemeTypes.MIDNIGHT !== arg0) {
      if (ThemeTypes.DARKER !== arg0) {
        return false;
      }
    }
  }
  return true;
};
