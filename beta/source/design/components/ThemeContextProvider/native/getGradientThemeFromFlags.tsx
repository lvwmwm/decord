// Module ID: 4539
// Function ID: 4540
// Name: getGradientThemeFromFlags
// Dependencies: [4540, 2]
// Exports: getGradientThemeFromFlags

// Module 4539 (getGradientThemeFromFlags)
import native from "native" /* 4540 */;
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
