// Module ID: 4035
// Function ID: 4036
// Name: AccessibilityAnnouncer
// Dependencies: [2, 4004, 3899, 3998]

// Module 4035 (AccessibilityAnnouncer)
const result = require("isThemeLight").fileFinishedImporting("design/shared.tsx");

export const AccessibilityAnnouncer = require("module_4004").AccessibilityAnnouncer;
export const AccessibilityPreferencesContext = require("module_4004").AccessibilityPreferencesContext;
export const LOW_SATURATION_THRESHOLD = require("module_4004").LOW_SATURATION_THRESHOLD;
export const ContrastPreference = require("module_4004").ContrastPreference;
export const ForcedColorsPreference = require("module_4004").ForcedColorsPreference;
export const MotionPreference = require("module_4004").MotionPreference;
export const RoleStyle = require("module_4004").RoleStyle;
export const AccessibilityPreferences = require("module_4004").AccessibilityPreferences;
export const useThemeContext = require("module_4004").useThemeContext;
export const ThemeContextType = require("module_4004").ThemeContextType;
export const isThemeDark = require("isThemeLight").isThemeDark;
export const isThemeLight = require("isThemeLight").isThemeLight;
export const getContrastingColor = require("WCAGContrastRatios").getContrastingColor;
export const darkenColor = require("WCAGContrastRatios").darkenColor;
export const brightenColor = require("WCAGContrastRatios").brightenColor;
export const setColorOpacity = require("WCAGContrastRatios").setColorOpacity;
export const WCAGContrastRatios = require("WCAGContrastRatios").WCAGContrastRatios;
