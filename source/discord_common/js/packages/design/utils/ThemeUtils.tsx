// Module ID: 3910
// Function ID: 3911
// Name: isThemeLight
// Dependencies: [713, 2]
// Exports: isThemeDark, isThemeLight

// Module 3910 (isThemeLight)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/utils/ThemeUtils.tsx");

export const isThemeLight = function isThemeLight(arg0) {
  return arg0 === require(713) /* items */.ThemeTypes.LIGHT;
};
export const isThemeDark = function isThemeDark(arg0) {
  if (require(713) /* items */.ThemeTypes.DARK !== arg0) {
    if (tmp(713).ThemeTypes.MIDNIGHT !== arg0) {
      if (tmp(713).ThemeTypes.DARKER !== arg0) {
        return false;
      }
    }
  }
  return true;
};
