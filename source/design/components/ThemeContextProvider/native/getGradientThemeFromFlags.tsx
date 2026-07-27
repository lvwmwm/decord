// Module ID: 3842
// Function ID: 32030
// Name: getGradientThemeFromFlags
// Dependencies: [3843, 2]
// Exports: getGradientThemeFromFlags

// Module 3842 (getGradientThemeFromFlags)
const result = require("set").fileFinishedImporting("design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx");

export const getGradientThemeFromFlags = function getGradientThemeFromFlags(themeContext) {
  const obj = require(3843) /* ManaContext */;
  require(3843) /* ManaContext */;
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
