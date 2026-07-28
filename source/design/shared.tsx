// Module ID: 4011
// Function ID: 33096
// Name: AccessibilityAnnouncer
// Dependencies: [2, 3980, 3875, 3974]

// Module 4011 (AccessibilityAnnouncer)
const result = require("isThemeLight").fileFinishedImporting("design/shared.tsx");

export const AccessibilityAnnouncer = require("module_3980").AccessibilityAnnouncer;
export const AccessibilityPreferencesContext = require("module_3980").AccessibilityPreferencesContext;
export const LOW_SATURATION_THRESHOLD = require("module_3980").LOW_SATURATION_THRESHOLD;
export const ContrastPreference = require("module_3980").ContrastPreference;
export const ForcedColorsPreference = require("module_3980").ForcedColorsPreference;
export const MotionPreference = require("module_3980").MotionPreference;
export const RoleStyle = require("module_3980").RoleStyle;
export const AccessibilityPreferences = require("module_3980").AccessibilityPreferences;
export const useThemeContext = require("module_3980").useThemeContext;
export const ThemeContextType = require("module_3980").ThemeContextType;
export const isThemeDark = require("isThemeLight").isThemeDark;
export const isThemeLight = require("isThemeLight").isThemeLight;
export const getContrastingColor = require("toRGBAString").getContrastingColor;
export const darkenColor = require("toRGBAString").darkenColor;
export const brightenColor = require("toRGBAString").brightenColor;
export const setColorOpacity = require("toRGBAString").setColorOpacity;
export const WCAGContrastRatios = require("toRGBAString").WCAGContrastRatios;
