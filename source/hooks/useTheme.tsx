// Module ID: 4239
// Function ID: 4240
// Name: useTheme
// Dependencies: [676, 1363, 2]
// Exports: default, getThemeIndex, useTheme, useThemeIndex

// Module 4239 (useTheme)
import { ThemeTypes } from "ME";

function useTheme() {
  return require(1363) /* AccessibilityAnnouncer */.useThemeContext().theme;
}
const result = require("set").fileFinishedImporting("hooks/useTheme.tsx");

export default useTheme;
export { useTheme };
export const useThemeIndex = function useThemeIndex() {
  const theme = require(1363) /* AccessibilityAnnouncer */.useThemeContext().theme;
  let num = 0;
  if (ThemeTypes.DARK !== theme) {
    if (ThemeTypes.LIGHT === theme) {
      num = 1;
    }
  }
  return num;
};
export const getThemeIndex = function getThemeIndex(arg0) {
  if (ThemeTypes.DARK === arg0) {
    return 0;
  } else if (tmp.LIGHT === arg0) {
    return 1;
  }
};
