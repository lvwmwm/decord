// Module ID: 4106
// Function ID: 4107
// Name: getGradientThemeFromFlags
// Dependencies: [4107, 2]
// Exports: getGradientThemeFromFlags

// Module 4106 (getGradientThemeFromFlags)
import set from "set" /* 2 */;
import ManaContext from "ManaContext" /* 4107 */;

const result = set.fileFinishedImporting("design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx");

export const getGradientThemeFromFlags = function getGradientThemeFromFlags(themeContext) {
  const obj = ManaContext;
  ManaContext;
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
