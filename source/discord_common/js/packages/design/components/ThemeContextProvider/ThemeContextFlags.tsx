// Module ID: 3856
// Function ID: 32067
// Name: hasThemeFlag
// Dependencies: [3853, 2]
// Exports: setThemeFlag, useThemeFlag

// Module 3856 (hasThemeFlag)
function hasThemeFlag(flags, MOBILE_DARK_GRADIENT_THEME_ENABLED) {
  return (flags.flags & MOBILE_DARK_GRADIENT_THEME_ENABLED) === MOBILE_DARK_GRADIENT_THEME_ENABLED;
}
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/ThemeContextProvider/ThemeContextFlags.tsx");

export const ThemeContextFlags = { MOBILE_DARK_GRADIENT_THEME_ENABLED: 4, [4]: "MOBILE_DARK_GRADIENT_THEME_ENABLED", MOBILE_LIGHT_GRADIENT_THEME_ENABLED: 8, [8]: "MOBILE_LIGHT_GRADIENT_THEME_ENABLED", REDUCED_CONTRAST_ENABLED: 16, [16]: "REDUCED_CONTRAST_ENABLED", INCREASED_CONTRAST_ENABLED: 32, [32]: "INCREASED_CONTRAST_ENABLED", REDUCE_SATURATION_ENABLED: 64, [64]: "REDUCE_SATURATION_ENABLED" };
export { hasThemeFlag };
export const setThemeFlag = function setThemeFlag(arg0, MOBILE_DARK_GRADIENT_THEME_ENABLED) {
  return arg0 | MOBILE_DARK_GRADIENT_THEME_ENABLED;
};
export const useThemeFlag = function useThemeFlag(MOBILE_DARK_GRADIENT_THEME_ENABLED) {
  return hasThemeFlag(require(3853) /* createThemedContext */.useThemeContext(), MOBILE_DARK_GRADIENT_THEME_ENABLED);
};
