// Module ID: 4763
// Function ID: 4764
// Name: useTheme
// Dependencies: [1074, 4680, 2]
// Exports: default, getThemeIndex, useTheme, useThemeIndex

// Module 4763 (useTheme)
import Constants from "Constants" /* 1074 */;
import shared from "shared" /* 4680 */;
import size from "module_2" /* 2 */;

function useTheme() {
  return shared.useThemeContext().theme;
}
const ThemeTypes = Constants.ThemeTypes;
const result = size.fileFinishedImporting("hooks/useTheme.tsx");

export default useTheme;
export { useTheme };
export const useThemeIndex = function useThemeIndex() {
  const theme = shared.useThemeContext().theme;
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
