// Module ID: 4992
// Function ID: 4993
// Name: getGradientThemeFromFlags
// Dependencies: [4884, 2]
// Exports: getGradientThemeFromFlags

// Module 4992 (getGradientThemeFromFlags)
import native from "native" /* 4884 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx");

export function getGradientThemeFromFlags(themeContext) {
  const obj = native;
  const hasThemeFlagResult = obj.hasThemeFlag(themeContext, native.ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED);
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
}
