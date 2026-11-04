// Module ID: 5191
// Function ID: 5192
// Name: getGradientThemeFromFlags
// Dependencies: [5080, 2]
// Exports: getGradientThemeFromFlags

// Module 5191 (getGradientThemeFromFlags)
import native from "native" /* 5080 */;
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
