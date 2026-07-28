// Module ID: 4101
// Function ID: 33986
// Name: useTheme
// Dependencies: [653, 4011, 2]
// Exports: useThemeIndex

// Module 4101 (useTheme)
import { ThemeTypes } from "ME";

function useTheme() {
  return require(4011) /* AccessibilityAnnouncer */.useThemeContext().theme;
}
function getThemeIndex(arg0) {
  if (ThemeTypes.DARK === arg0) {
    return 0;
  } else if (ThemeTypes.LIGHT === arg0) {
    return 1;
  }
}
const result = require("set").fileFinishedImporting("hooks/useTheme.tsx");

export default useTheme;
export { useTheme };
export const useThemeIndex = function useThemeIndex() {
  return getThemeIndex(useTheme());
};
export { getThemeIndex };
