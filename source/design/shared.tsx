// Module ID: 3977
// Function ID: 32994
// Name: AccessibilityAnnouncer
// Dependencies: [2, 3946, 3841, 3940]

// Module 3977 (AccessibilityAnnouncer)
const result = require("isThemeLight").fileFinishedImporting("design/shared.tsx");

export const AccessibilityAnnouncer = require("module_3946").AccessibilityAnnouncer;
export const AccessibilityPreferencesContext = require("module_3946").AccessibilityPreferencesContext;
export const LOW_SATURATION_THRESHOLD = require("module_3946").LOW_SATURATION_THRESHOLD;
export const ContrastPreference = require("module_3946").ContrastPreference;
export const ForcedColorsPreference = require("module_3946").ForcedColorsPreference;
export const MotionPreference = require("module_3946").MotionPreference;
export const RoleStyle = require("module_3946").RoleStyle;
export const AccessibilityPreferences = require("module_3946").AccessibilityPreferences;
export const useThemeContext = require("module_3946").useThemeContext;
export const ThemeContextType = require("module_3946").ThemeContextType;
export const isThemeDark = require("isThemeLight").isThemeDark;
export const isThemeLight = require("isThemeLight").isThemeLight;
export const getContrastingColor = require("toRGBAString").getContrastingColor;
export const darkenColor = require("toRGBAString").darkenColor;
export const brightenColor = require("toRGBAString").brightenColor;
export const setColorOpacity = require("toRGBAString").setColorOpacity;
export const WCAGContrastRatios = require("toRGBAString").WCAGContrastRatios;
