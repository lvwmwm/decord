// Module ID: 5180
// Function ID: 5181
// Name: getGradientThemeFromFlags
// Dependencies: [5071, 2]
// Exports: getGradientThemeFromFlags

// Module 5180 (getGradientThemeFromFlags)
import native from "native" /* 5071 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx");

export function getGradientThemeFromFlags(primaryColor) {
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
}
