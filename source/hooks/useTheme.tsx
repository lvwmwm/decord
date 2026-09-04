// Module ID: 4416
// Function ID: 4417
// Name: useTheme
// Dependencies: [673, 1362, 2]
// Exports: default, getThemeIndex, useTheme, useThemeIndex

// Module 4416 (useTheme)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;

function useTheme() {
  return AccessibilityAnnouncer.useThemeContext().theme;
}
const ThemeTypes = ME.ThemeTypes;
const result = set.fileFinishedImporting("hooks/useTheme.tsx");

export default useTheme;
export { useTheme };
export const useThemeIndex = function useThemeIndex() {
  const theme = AccessibilityAnnouncer.useThemeContext().theme;
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
