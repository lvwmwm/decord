// Module ID: 4543
// Function ID: 4544
// Name: getGradientThemeFromFlags
// Dependencies: [4544, 2]
// Exports: getGradientThemeFromFlags

// Module 4543 (getGradientThemeFromFlags)
import native from "native" /* 4544 */;
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
