// Module ID: 3851
// Function ID: 32056
// Name: isThemeLight
// Dependencies: [690, 2]
// Exports: isThemeDark, isThemeLight

// Module 3851 (isThemeLight)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/utils/ThemeUtils.tsx");

export const isThemeLight = function isThemeLight(arg0) {
  return arg0 === require(690) /* items */.ThemeTypes.LIGHT;
};
export const isThemeDark = function isThemeDark(arg0) {
  if (require(690) /* items */.ThemeTypes.DARK !== arg0) {
    if (require(690) /* items */.ThemeTypes.MIDNIGHT !== arg0) {
      if (require(690) /* items */.ThemeTypes.DARKER !== arg0) {
        return false;
      }
    }
  }
  return true;
};
