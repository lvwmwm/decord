// Module ID: 3900
// Function ID: 3901
// Name: getGradientThemeFromFlags
// Dependencies: [3901, 2]
// Exports: getGradientThemeFromFlags

// Module 3900 (getGradientThemeFromFlags)
const result = require("set").fileFinishedImporting("design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx");

export const getGradientThemeFromFlags = function getGradientThemeFromFlags(themeContext) {
  const obj = require(3901) /* ManaContext */;
  require(3901) /* ManaContext */;
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
