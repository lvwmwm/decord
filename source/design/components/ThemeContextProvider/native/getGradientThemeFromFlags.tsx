// Module ID: 4012
// Function ID: 4013
// Name: getGradientThemeFromFlags
// Dependencies: [4013, 2]
// Exports: getGradientThemeFromFlags

// Module 4012 (getGradientThemeFromFlags)
const result = require("set").fileFinishedImporting("design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx");

export const getGradientThemeFromFlags = function getGradientThemeFromFlags(themeContext) {
  const obj = require(4013) /* ManaContext */;
  require(4013) /* ManaContext */;
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
