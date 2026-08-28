// Module ID: 4172
// Function ID: 4173
// Name: getGradientThemeFromFlags
// Dependencies: [4173, 2]
// Exports: getGradientThemeFromFlags

// Module 4172 (getGradientThemeFromFlags)
import set from "set" /* 2 */;
import ManaContext from "ManaContext" /* 4173 */;

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
