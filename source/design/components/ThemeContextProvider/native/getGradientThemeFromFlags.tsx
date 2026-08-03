// Module ID: 3966
// Function ID: 3967
// Name: getGradientThemeFromFlags
// Dependencies: [3967, 2]
// Exports: getGradientThemeFromFlags

// Module 3966 (getGradientThemeFromFlags)
const result = require("set").fileFinishedImporting("design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx");

export const getGradientThemeFromFlags = function getGradientThemeFromFlags(themeContext) {
  const obj = require(3967) /* ManaContext */;
  require(3967) /* ManaContext */;
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
