// Module ID: 4479
// Function ID: 4480
// Name: ThemeUtils
// Dependencies: [577, 2]
// Exports: isThemeDark, isThemeLight

// Module 4479 (ThemeUtils)
import ThemeTypes from "ThemeTypes" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/design/utils/ThemeUtils.tsx");

export const isThemeLight = function isThemeLight(arg0) {
  return arg0 === ThemeTypes.ThemeTypes.LIGHT;
};
export const isThemeDark = function isThemeDark(arg0) {
  if (ThemeTypes.ThemeTypes.ASH !== arg0) {
    if (tmp(577).ThemeTypes.ONYX !== arg0) {
      if (tmp(577).ThemeTypes.DARK !== arg0) {
        return false;
      }
    }
  }
  return true;
};
