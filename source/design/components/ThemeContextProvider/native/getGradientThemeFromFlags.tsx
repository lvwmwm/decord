// Module ID: 3839
// Function ID: 32010
// Name: getGradientThemeFromFlags
// Dependencies: []
// Exports: getGradientThemeFromFlags

// Module 3839 (getGradientThemeFromFlags)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx");

export const getGradientThemeFromFlags = function getGradientThemeFromFlags(themeContext) {
  const obj = require(dependencyMap[0]);
  require(dependencyMap[0]);
  let str = "dark";
  if (!hasThemeFlagResult) {
    let str2 = null;
    if (tmp3) {
      str2 = "light";
    }
    str = str2;
  }
  return str;
};
