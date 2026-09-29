// Module ID: 4497
// Function ID: 4498
// Name: getGradientThemeFromFlags
// Dependencies: [4498, 2]
// Exports: getGradientThemeFromFlags

// Module 4497 (getGradientThemeFromFlags)
import native from "native" /* 4498 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx");

export const getGradientThemeFromFlags = function getGradientThemeFromFlags(themeContext) {
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
