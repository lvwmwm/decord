// Module ID: 5032
// Function ID: 5033
// Name: useTheme
// Dependencies: [1072, 4830, 2]
// Exports: default, getThemeIndex, useTheme, useThemeIndex

// Module 5032 (useTheme)
import Constants from "Constants" /* 1072 */;
import shared from "shared" /* 4830 */;
import size from "module_2" /* 2 */;

function useTheme() {
  const obj = shared;
  return obj.useThemeContext().theme;
}
const ThemeTypes = Constants.ThemeTypes;
const result = size.fileFinishedImporting("hooks/useTheme.tsx");

export default useTheme;
export { useTheme };
export function useThemeIndex() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  let num = 0;
  if (ThemeTypes.DARK !== theme) {
    if (ThemeTypes.LIGHT === theme) {
      num = 1;
    }
  }
  return num;
}
export function getThemeIndex(arg0) {
  if (ThemeTypes.DARK === arg0) {
    return 0;
  } else if (tmp.LIGHT === arg0) {
    return 1;
  }
}
