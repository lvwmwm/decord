// Module ID: 4066
// Function ID: 33871
// Name: useTheme
// Dependencies: [653, 3976, 2]
// Exports: useThemeIndex

// Module 4066 (useTheme)
import { ThemeTypes } from "ME";

function useTheme() {
  return require(3976) /* AccessibilityAnnouncer */.useThemeContext().theme;
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
