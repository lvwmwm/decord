// Module ID: 3904
// Function ID: 3905
// Name: getGradientThemeFromFlags
// Dependencies: [3905, 2]
// Exports: getGradientThemeFromFlags

// Module 3904 (getGradientThemeFromFlags)
const result = require("set").fileFinishedImporting("design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx");

export const getGradientThemeFromFlags = function getGradientThemeFromFlags(themeContext) {
  const obj = require(3905) /* ManaContext */;
  require(3905) /* ManaContext */;
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
