// Module ID: 5104
// Function ID: 5105
// Name: getGradientThemeFromFlags
// Dependencies: [4999, 2]
// Exports: getGradientThemeFromFlags

// Module 5104 (getGradientThemeFromFlags)
import native from "native" /* 4999 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx");

export const getGradientThemeFromFlags = function getGradientThemeFromFlags(primaryColor) {
  const obj = native;
  const hasThemeFlagResult = obj.hasThemeFlag(primaryColor, native.ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED);
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
