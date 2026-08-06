// Module ID: 3995
// Function ID: 3996
// Name: getGradientThemeFromFlags
// Dependencies: [3996, 2]
// Exports: getGradientThemeFromFlags

// Module 3995 (getGradientThemeFromFlags)
const result = require("set").fileFinishedImporting("design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx");

export const getGradientThemeFromFlags = function getGradientThemeFromFlags(themeContext) {
  const obj = require(3996) /* ManaContext */;
  require(3996) /* ManaContext */;
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
