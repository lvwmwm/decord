// Module ID: 4470
// Function ID: 4471
// Name: getGradientThemeFromFlags
// Dependencies: [4471, 2]
// Exports: getGradientThemeFromFlags

// Module 4470 (getGradientThemeFromFlags)
import native from "native" /* 4471 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx");

export const getGradientThemeFromFlags = function getGradientThemeFromFlags(primaryColor) {
  native;
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
