// Module ID: 5475
// Function ID: 5476
// Name: getGradientThemeFromFlags
// Dependencies: [5367, 2]
// Exports: getGradientThemeFromFlags

// Module 5475 (getGradientThemeFromFlags)
import native from "native" /* 5367 */;
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
