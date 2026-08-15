// Module ID: 4103
// Function ID: 4104
// Name: getGradientThemeFromFlags
// Dependencies: [4104, 2]
// Exports: getGradientThemeFromFlags

// Module 4103 (getGradientThemeFromFlags)
const result = require("set").fileFinishedImporting("design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx");

export const getGradientThemeFromFlags = function getGradientThemeFromFlags(themeContext) {
  const obj = require(4104) /* ManaContext */;
  require(4104) /* ManaContext */;
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
