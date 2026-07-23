// Module ID: 3976
// Function ID: 32981
// Name: AccessibilityAnnouncer
// Dependencies: [2, 3945, 3840, 3939]

// Module 3976 (AccessibilityAnnouncer)
const result = require("isThemeLight").fileFinishedImporting("design/shared.tsx");

export const AccessibilityAnnouncer = require("module_3945").AccessibilityAnnouncer;
export const AccessibilityPreferencesContext = require("module_3945").AccessibilityPreferencesContext;
export const LOW_SATURATION_THRESHOLD = require("module_3945").LOW_SATURATION_THRESHOLD;
export const ContrastPreference = require("module_3945").ContrastPreference;
export const ForcedColorsPreference = require("module_3945").ForcedColorsPreference;
export const MotionPreference = require("module_3945").MotionPreference;
export const RoleStyle = require("module_3945").RoleStyle;
export const AccessibilityPreferences = require("module_3945").AccessibilityPreferences;
export const useThemeContext = require("module_3945").useThemeContext;
export const ThemeContextType = require("module_3945").ThemeContextType;
export const isThemeDark = require("isThemeLight").isThemeDark;
export const isThemeLight = require("isThemeLight").isThemeLight;
export const getContrastingColor = require("toRGBAString").getContrastingColor;
export const darkenColor = require("toRGBAString").darkenColor;
export const brightenColor = require("toRGBAString").brightenColor;
export const setColorOpacity = require("toRGBAString").setColorOpacity;
export const WCAGContrastRatios = require("toRGBAString").WCAGContrastRatios;
