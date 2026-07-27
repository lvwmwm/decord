// Module ID: 4067
// Function ID: 33884
// Name: useTheme
// Dependencies: [653, 3977, 2]
// Exports: useThemeIndex

// Module 4067 (useTheme)
import { ThemeTypes } from "ME";

function useTheme() {
  return require(3977) /* AccessibilityAnnouncer */.useThemeContext().theme;
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
