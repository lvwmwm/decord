// Module ID: 5253
// Function ID: 5254
// Name: useTheme
// Dependencies: [1072, 5021, 2]
// Exports: default, getThemeIndex, useTheme, useThemeIndex

// Module 5253 (useTheme)
import Constants from "Constants" /* 1072 */;
import shared from "shared" /* 5021 */;
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
