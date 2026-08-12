// Module ID: 4071
// Function ID: 4072
// Name: getGradientThemeFromFlags
// Dependencies: [4072, 2]
// Exports: getGradientThemeFromFlags

// Module 4071 (getGradientThemeFromFlags)
const result = require("set").fileFinishedImporting("design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx");

export const getGradientThemeFromFlags = function getGradientThemeFromFlags(themeContext) {
  const obj = require(4072) /* ManaContext */;
  require(4072) /* ManaContext */;
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
