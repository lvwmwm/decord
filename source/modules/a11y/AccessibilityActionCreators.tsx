// Module ID: 13370
// Function ID: 102724
// Name: setFontSize
// Dependencies: [4122, 653, 3806, 662, 686, 675, 7955, 2]
// Exports: disableKeyboardMode, enableKeyboardMode, forcedColorsModalSeen, keyboardNavigationExplainerModalSeen, resetToDefault, setAlwaysShowLinkDecorations, setChatBarSettings, setContrast, setContrastMode, setDisplayNameStylesEnabled, setEnableCustomCursor, setFontSize, setHDRDynamicRange, setLowContrastMode, setMessageGroupSpacing, setOfficialMessageStyle, setPrefersReducedMotion, setRoleStyle, setSaturation, setSwitchIconsEnabled, setSyncForcedColors, setZoom, systemColorPreferencesChanged, systemPrefersContrastChanged, systemPrefersCrossfadesChanged, systemPrefersReducedMotionChanged, toggleColorblindMode, toggleDesaturateUserColors, toggleSubmitButton, toggleSyncProfileThemeWithUserTheme

// Module 13370 (setFontSize)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { StickerAnimationSettings } from "STICKER_PICKER_TAB_PANEL_ID";
import { SettingsOverrideReasonKeys as closure_5 } from "MAX_FAVORITES";

let result = require("STICKER_PICKER_TAB_PANEL_ID").fileFinishedImporting("modules/a11y/AccessibilityActionCreators.tsx");

export const setFontSize = function setFontSize(fontSize) {
  let obj = importDefault(686);
  obj = { type: "ACCESSIBILITY_SET_FONT_SIZE", fontSize };
  obj.dispatch(obj);
};
export const setMessageGroupSpacing = function setMessageGroupSpacing() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = null;
  }
  let obj = importDefault(686);
  obj = { type: "ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING", messageGroupSpacing: tmp };
  obj.dispatch(obj);
};
export const setZoom = function setZoom(zoom) {
  let obj = importDefault(686);
  obj = { type: "ACCESSIBILITY_SET_ZOOM", zoom };
  obj.dispatch(obj);
};
export const resetToDefault = function resetToDefault() {
  importDefault(686).dispatch({ type: "ACCESSIBILITY_RESET_TO_DEFAULT" });
};
export const enableKeyboardMode = function enableKeyboardMode() {
  importDefault(686).dispatch({ type: "ACCESSIBILITY_KEYBOARD_MODE_ENABLE" });
  const obj = importDefault(686);
  importDefault(675).track(AnalyticEvents.KEYBOARD_MODE_TOGGLED, { enabled: true });
};
export const disableKeyboardMode = function disableKeyboardMode() {
  importDefault(686).dispatch({ type: "ACCESSIBILITY_KEYBOARD_MODE_DISABLE" });
  const obj = importDefault(686);
  importDefault(675).track(AnalyticEvents.KEYBOARD_MODE_TOGGLED, { enabled: false });
};
export const toggleDesaturateUserColors = function toggleDesaturateUserColors() {
  importDefault(686).dispatch({ type: "ACCESSIBILITY_DESATURATE_ROLES_TOGGLE" });
};
export const toggleColorblindMode = function toggleColorblindMode() {
  importDefault(686).dispatch({ type: "ACCESSIBILITY_COLORBLIND_TOGGLE" });
};
export const forcedColorsModalSeen = function forcedColorsModalSeen() {
  importDefault(686).dispatch({ type: "ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN" });
};
export const keyboardNavigationExplainerModalSeen = function keyboardNavigationExplainerModalSeen() {
  importDefault(686).dispatch({ type: "KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN" });
};
export const systemPrefersReducedMotionChanged = function systemPrefersReducedMotionChanged(systemPrefersReducedMotion) {
  let obj = importDefault(686);
  obj = { type: "ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED", systemPrefersReducedMotion };
  obj.dispatch(obj);
};
export const systemPrefersCrossfadesChanged = function systemPrefersCrossfadesChanged(systemPrefersCrossfades) {
  let obj = importDefault(686);
  obj = { type: "ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED", systemPrefersCrossfades };
  obj.dispatch(obj);
};
export const setLowContrastMode = function setLowContrastMode(lowContrastMode) {
  let obj = importDefault(686);
  obj = { type: "ACCESSIBILITY_LOW_CONTRAST_TOGGLE", lowContrastMode };
  obj.dispatch(obj);
};
export const setSaturation = function setSaturation(saturation) {
  let obj = importDefault(686);
  obj = { type: "ACCESSIBILITY_SET_SATURATION", saturation };
  obj.dispatch(obj);
};
export const setPrefersReducedMotion = function setPrefersReducedMotion(prefersReducedMotion) {
  let useReducedMotion = _isNativeReflectConstruct.useReducedMotion;
  let obj = importDefault(686);
  obj = { type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", prefersReducedMotion };
  obj.dispatch(obj);
  const useReducedMotion2 = _isNativeReflectConstruct.useReducedMotion;
  if (!useReducedMotion) {
    if (useReducedMotion2) {
      let obj2 = importDefault(7955);
      obj = {};
      const obj1 = { value: false, reasonKey: constants.REDUCED_MOTION };
      obj.gifAutoPlay = obj1;
      obj2 = { value: false, reasonKey: constants.REDUCED_MOTION };
      obj.animateEmoji = obj2;
      const obj3 = { value: StickerAnimationSettings.ANIMATE_ON_INTERACTION, reasonKey: constants.REDUCED_MOTION_STICKERS };
      obj.animateStickers = obj3;
      const result = obj2.applySettingsOverride(obj);
    }
  }
  if (useReducedMotion) {
    useReducedMotion = !useReducedMotion2;
  }
  if (useReducedMotion) {
    const result1 = importDefault(7955).clearSettingsOverride("gifAutoPlay", "animateEmoji", "animateStickers");
    const obj8 = importDefault(7955);
  }
};
export const setSyncForcedColors = function setSyncForcedColors(syncForcedColors) {
  let obj = importDefault(686);
  obj = { type: "ACCESSIBILITY_SET_SYNC_FORCED_COLORS", syncForcedColors };
  obj.dispatch(obj);
};
export const systemColorPreferencesChanged = function systemColorPreferencesChanged(systemForcedColors) {
  let obj = importDefault(686);
  obj = { type: "ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED", systemForcedColors };
  obj.dispatch(obj);
};
export const systemPrefersContrastChanged = function systemPrefersContrastChanged(systemPrefersContrast) {
  let obj = importDefault(686);
  obj = { type: "ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED", systemPrefersContrast };
  obj.dispatch(obj);
};
export const setAlwaysShowLinkDecorations = function setAlwaysShowLinkDecorations(alwaysShowLinkDecorations) {
  let obj = importDefault(686);
  obj = { type: "ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS", alwaysShowLinkDecorations };
  obj.dispatch(obj);
};
export const setEnableCustomCursor = function setEnableCustomCursor(enableCustomCursor) {
  let obj = importDefault(686);
  obj = { type: "ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR", enableCustomCursor };
  obj.dispatch(obj);
};
export const setRoleStyle = function setRoleStyle(roleStyle) {
  let obj = importDefault(686);
  obj = { type: "ACCESSIBILITY_SET_ROLE_STYLE", roleStyle };
  obj.dispatch(obj);
  obj = { role_style: roleStyle };
  importDefault(675).track(AnalyticEvents.ROLE_STYLE_SETTING_UPDATED, obj);
};
export const setOfficialMessageStyle = function setOfficialMessageStyle(officialMessageStyle) {
  let obj = importDefault(686);
  obj = { type: "ACCESSIBILITY_SET_OFFICIAL_MESSAGE_STYLE", officialMessageStyle };
  obj.dispatch(obj);
  obj = { official_message_style: officialMessageStyle };
  importDefault(675).track(AnalyticEvents.OFFICIAL_MESSAGE_STYLE_SETTING_UPDATED, obj);
};
export const setDisplayNameStylesEnabled = function setDisplayNameStylesEnabled(enabled) {
  let obj = importDefault(686);
  obj = { type: "ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED", enabled };
  obj.dispatch(obj);
};
export const toggleSubmitButton = function toggleSubmitButton() {
  importDefault(686).dispatch({ type: "ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE" });
};
export const toggleSyncProfileThemeWithUserTheme = function toggleSyncProfileThemeWithUserTheme() {
  importDefault(686).dispatch({ type: "ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE" });
};
export const setContrast = function setContrast(contrast) {
  let obj = importDefault(686);
  obj = { type: "ACCESSIBILITY_SET_CONTRAST", contrast };
  obj.dispatch(obj);
};
export const setContrastMode = function setContrastMode(contrastMode) {
  let obj = importDefault(686);
  obj = { type: "ACCESSIBILITY_SET_CONTRAST_MODE", contrastMode };
  obj.dispatch(obj);
};
export const setSwitchIconsEnabled = function setSwitchIconsEnabled(switchIconsEnabled) {
  let obj = importDefault(686);
  obj = { type: "ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED", switchIconsEnabled };
  obj.dispatch(obj);
};
export const setChatBarSettings = function setChatBarSettings(arg0) {
  let obj = importDefault(686);
  obj = { type: "ACCESSIBILITY_SET_CHAT_BAR_SETTINGS" };
  const merged = Object.assign(arg0);
  obj.dispatch(obj);
};
export const setHDRDynamicRange = function setHDRDynamicRange(hdrDynamicRange) {
  let obj = importDefault(686);
  obj = { hdrDynamicRange };
  obj.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: obj });
};
