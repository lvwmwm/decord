// Module ID: 3849
// Function ID: 32048
// Name: isThemeLight
// Dependencies: []
// Exports: isThemeDark, isThemeLight

// Module 3849 (isThemeLight)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/design/utils/ThemeUtils.tsx");

export const isThemeLight = function isThemeLight(arg0) {
  return arg0 === require(dependencyMap[0]).ThemeTypes.LIGHT;
};
export const isThemeDark = function isThemeDark(arg0) {
  if (require(dependencyMap[0]).ThemeTypes.DARK !== arg0) {
    if (require(dependencyMap[0]).ThemeTypes.MIDNIGHT !== arg0) {
      if (require(dependencyMap[0]).ThemeTypes.DARKER !== arg0) {
        return false;
      }
    }
  }
  return true;
};
