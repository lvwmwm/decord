// Module ID: 5144
// Function ID: 5145
// Name: getGradientThemeFromFlags
// Dependencies: [5038, 2]
// Exports: getGradientThemeFromFlags

// Module 5144 (getGradientThemeFromFlags)
import native from "native" /* 5038 */;
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
