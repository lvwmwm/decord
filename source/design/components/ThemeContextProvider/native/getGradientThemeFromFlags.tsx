// Module ID: 3876
// Function ID: 32132
// Name: getGradientThemeFromFlags
// Dependencies: [3877, 2]
// Exports: getGradientThemeFromFlags

// Module 3876 (getGradientThemeFromFlags)
const result = require("set").fileFinishedImporting("design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx");

export const getGradientThemeFromFlags = function getGradientThemeFromFlags(themeContext) {
  const obj = require(3877) /* ManaContext */;
  require(3877) /* ManaContext */;
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
