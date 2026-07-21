// Module ID: 4064
// Function ID: 33860
// Name: useTheme
// Dependencies: []
// Exports: useThemeIndex

// Module 4064 (useTheme)
function useTheme() {
  return require(dependencyMap[1]).useThemeContext().theme;
}
function getThemeIndex(arg0) {
  if (ThemeTypes.DARK === arg0) {
    return 0;
  } else if (ThemeTypes.LIGHT === arg0) {
    return 1;
  }
}
const ThemeTypes = require(dependencyMap[0]).ThemeTypes;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("hooks/useTheme.tsx");

export default useTheme;
export { useTheme };
export const useThemeIndex = function useThemeIndex() {
  return getThemeIndex(useTheme());
};
export { getThemeIndex };
