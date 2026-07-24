// Module ID: 3841
// Function ID: 32018
// Name: getGradientThemeFromFlags
// Dependencies: [3842, 2]
// Exports: getGradientThemeFromFlags

// Module 3841 (getGradientThemeFromFlags)
const result = require("set").fileFinishedImporting("design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx");

export const getGradientThemeFromFlags = function getGradientThemeFromFlags(themeContext) {
  const obj = require(3842) /* ManaContext */;
  require(3842) /* ManaContext */;
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
