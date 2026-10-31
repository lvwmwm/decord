// Module ID: 5034
// Function ID: 5035
// Name: ThemeContextFlags
// Dependencies: [5031, 2]
// Exports: hasThemeFlag, setThemeFlag, useThemeFlag

// Module 5034 (ThemeContextFlags)
import ThemeContext from "ThemeContext" /* 5031 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/ThemeContextProvider/ThemeContextFlags.tsx");

export const ThemeContextFlags = { MOBILE_DARK_GRADIENT_THEME_ENABLED: 4, [4]: "MOBILE_DARK_GRADIENT_THEME_ENABLED", MOBILE_LIGHT_GRADIENT_THEME_ENABLED: 8, [8]: "MOBILE_LIGHT_GRADIENT_THEME_ENABLED", REDUCED_CONTRAST_ENABLED: 16, [16]: "REDUCED_CONTRAST_ENABLED", INCREASED_CONTRAST_ENABLED: 32, [32]: "INCREASED_CONTRAST_ENABLED", REDUCE_SATURATION_ENABLED: 64, [64]: "REDUCE_SATURATION_ENABLED" };
export function hasThemeFlag(flags, MOBILE_DARK_GRADIENT_THEME_ENABLED) {
  return (flags.flags & MOBILE_DARK_GRADIENT_THEME_ENABLED) === MOBILE_DARK_GRADIENT_THEME_ENABLED;
}
export function setThemeFlag(setThemeFlagResult, MOBILE_DARK_GRADIENT_THEME_ENABLED) {
  return setThemeFlagResult | MOBILE_DARK_GRADIENT_THEME_ENABLED;
}
export function useThemeFlag(arg0) {
  const obj = ThemeContext;
  return (obj.useThemeContext().flags & arg0) === arg0;
}
