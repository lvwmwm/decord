// Module ID: 3840
// Function ID: 32015
// Name: isThemeLight
// Dependencies: [482, 2]
// Exports: isThemeDark, isThemeLight

// Module 3840 (isThemeLight)
import { ThemeTypes } from "sum";

const result = require("set").fileFinishedImporting("design/utils/shared/themes.tsx");

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
