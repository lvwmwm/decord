// Module ID: 4502
// Function ID: 4503
// Name: getGradientThemeFromFlags
// Dependencies: [4503, 2]
// Exports: getGradientThemeFromFlags

// Module 4502 (getGradientThemeFromFlags)
import native from "native" /* 4503 */;
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
