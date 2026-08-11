// Module ID: 4030
// Function ID: 4031
// Name: getGradientThemeFromFlags
// Dependencies: [4031, 2]
// Exports: getGradientThemeFromFlags

// Module 4030 (getGradientThemeFromFlags)
const result = require("set").fileFinishedImporting("design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx");

export const getGradientThemeFromFlags = function getGradientThemeFromFlags(themeContext) {
  const obj = require(4031) /* ManaContext */;
  require(4031) /* ManaContext */;
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
