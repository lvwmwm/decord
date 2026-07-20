// Module ID: 13240
// Function ID: 100490
// Name: setFontSize
// Dependencies: [3254779945, 3271557171, 2684354611, 3154116612, 3707764745, 3288334337, 2734686259, 2852126722]
// Exports: disableKeyboardMode, enableKeyboardMode, forcedColorsModalSeen, keyboardNavigationExplainerModalSeen, resetToDefault, setAlwaysShowLinkDecorations, setChatBarSettings, setContrast, setContrastMode, setDisplayNameStylesEnabled, setEnableCustomCursor, setFontSize, setHDRDynamicRange, setLowContrastMode, setMessageGroupSpacing, setOfficialMessageStyle, setPrefersReducedMotion, setRoleStyle, setSaturation, setSwitchIconsEnabled, setSyncForcedColors, setZoom, systemColorPreferencesChanged, systemPrefersContrastChanged, systemPrefersCrossfadesChanged, systemPrefersReducedMotionChanged, toggleColorblindMode, toggleDesaturateUserColors, toggleSubmitButton, toggleSyncProfileThemeWithUserTheme

// Module 13240 (setFontSize)
let closure_2 = importDefault(dependencyMap[0]);
const AnalyticEvents = arg1(dependencyMap[1]).AnalyticEvents;
const StickerAnimationSettings = arg1(dependencyMap[2]).StickerAnimationSettings;
let closure_5 = arg1(dependencyMap[3]).SettingsOverrideReasonKeys;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/a11y/AccessibilityActionCreators.tsx");

export const setFontSize = function setFontSize(fontSize) {
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "ACCESSIBILITY_SET_FONT_SIZE", fontSize };
  obj.dispatch(obj);
};
export const setMessageGroupSpacing = function setMessageGroupSpacing() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = null;
  }
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING", messageGroupSpacing: tmp };
  obj.dispatch(obj);
};
export const setZoom = function setZoom(zoom) {
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "ACCESSIBILITY_SET_ZOOM", zoom };
  obj.dispatch(obj);
};
export const resetToDefault = function resetToDefault() {
  importDefault(dependencyMap[4]).dispatch({ type: "ACCESSIBILITY_RESET_TO_DEFAULT" });
};
export const enableKeyboardMode = function enableKeyboardMode() {
  importDefault(dependencyMap[4]).dispatch({ type: "ACCESSIBILITY_KEYBOARD_MODE_ENABLE" });
  const obj = importDefault(dependencyMap[4]);
  importDefault(dependencyMap[5]).track(AnalyticEvents.KEYBOARD_MODE_TOGGLED, { enabled: true });
};
export const disableKeyboardMode = function disableKeyboardMode() {
  importDefault(dependencyMap[4]).dispatch({ type: "ACCESSIBILITY_KEYBOARD_MODE_DISABLE" });
  const obj = importDefault(dependencyMap[4]);
  importDefault(dependencyMap[5]).track(AnalyticEvents.KEYBOARD_MODE_TOGGLED, { enabled: false });
};
export const toggleDesaturateUserColors = function toggleDesaturateUserColors() {
  importDefault(dependencyMap[4]).dispatch({ type: "ACCESSIBILITY_DESATURATE_ROLES_TOGGLE" });
};
export const toggleColorblindMode = function toggleColorblindMode() {
  importDefault(dependencyMap[4]).dispatch({ type: "ACCESSIBILITY_COLORBLIND_TOGGLE" });
};
export const forcedColorsModalSeen = function forcedColorsModalSeen() {
  importDefault(dependencyMap[4]).dispatch({ type: "ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN" });
};
export const keyboardNavigationExplainerModalSeen = function keyboardNavigationExplainerModalSeen() {
  importDefault(dependencyMap[4]).dispatch({ type: "KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN" });
};
export const systemPrefersReducedMotionChanged = function systemPrefersReducedMotionChanged(systemPrefersReducedMotion) {
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED", systemPrefersReducedMotion };
  obj.dispatch(obj);
};
export const systemPrefersCrossfadesChanged = function systemPrefersCrossfadesChanged(systemPrefersCrossfades) {
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED", systemPrefersCrossfades };
  obj.dispatch(obj);
};
export const setLowContrastMode = function setLowContrastMode(lowContrastMode) {
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "ACCESSIBILITY_LOW_CONTRAST_TOGGLE", lowContrastMode };
  obj.dispatch(obj);
};
export const setSaturation = function setSaturation(saturation) {
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "ACCESSIBILITY_SET_SATURATION", saturation };
  obj.dispatch(obj);
};
export const setPrefersReducedMotion = function setPrefersReducedMotion(prefersReducedMotion) {
  let useReducedMotion = closure_2.useReducedMotion;
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", prefersReducedMotion };
  obj.dispatch(obj);
  const useReducedMotion2 = closure_2.useReducedMotion;
  if (!useReducedMotion) {
    if (useReducedMotion2) {
      let obj2 = importDefault(dependencyMap[6]);
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
    const result1 = importDefault(dependencyMap[6]).clearSettingsOverride("gifAutoPlay", "animateEmoji", "animateStickers");
    const obj8 = importDefault(dependencyMap[6]);
  }
};
export const setSyncForcedColors = function setSyncForcedColors(syncForcedColors) {
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "ACCESSIBILITY_SET_SYNC_FORCED_COLORS", syncForcedColors };
  obj.dispatch(obj);
};
export const systemColorPreferencesChanged = function systemColorPreferencesChanged(systemForcedColors) {
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED", systemForcedColors };
  obj.dispatch(obj);
};
export const systemPrefersContrastChanged = function systemPrefersContrastChanged(systemPrefersContrast) {
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED", systemPrefersContrast };
  obj.dispatch(obj);
};
export const setAlwaysShowLinkDecorations = function setAlwaysShowLinkDecorations(alwaysShowLinkDecorations) {
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS", alwaysShowLinkDecorations };
  obj.dispatch(obj);
};
export const setEnableCustomCursor = function setEnableCustomCursor(enableCustomCursor) {
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR", enableCustomCursor };
  obj.dispatch(obj);
};
export const setRoleStyle = function setRoleStyle(roleStyle) {
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "ACCESSIBILITY_SET_ROLE_STYLE", roleStyle };
  obj.dispatch(obj);
  obj = { role_style: roleStyle };
  importDefault(dependencyMap[5]).track(AnalyticEvents.ROLE_STYLE_SETTING_UPDATED, obj);
};
export const setOfficialMessageStyle = function setOfficialMessageStyle(officialMessageStyle) {
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "ACCESSIBILITY_SET_OFFICIAL_MESSAGE_STYLE", officialMessageStyle };
  obj.dispatch(obj);
  obj = { official_message_style: officialMessageStyle };
  importDefault(dependencyMap[5]).track(AnalyticEvents.OFFICIAL_MESSAGE_STYLE_SETTING_UPDATED, obj);
};
export const setDisplayNameStylesEnabled = function setDisplayNameStylesEnabled(enabled) {
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED", enabled };
  obj.dispatch(obj);
};
export const toggleSubmitButton = function toggleSubmitButton() {
  importDefault(dependencyMap[4]).dispatch({ type: "ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE" });
};
export const toggleSyncProfileThemeWithUserTheme = function toggleSyncProfileThemeWithUserTheme() {
  importDefault(dependencyMap[4]).dispatch({ type: "ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE" });
};
export const setContrast = function setContrast(contrast) {
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "ACCESSIBILITY_SET_CONTRAST", contrast };
  obj.dispatch(obj);
};
export const setContrastMode = function setContrastMode(contrastMode) {
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "ACCESSIBILITY_SET_CONTRAST_MODE", contrastMode };
  obj.dispatch(obj);
};
export const setSwitchIconsEnabled = function setSwitchIconsEnabled(switchIconsEnabled) {
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED", switchIconsEnabled };
  obj.dispatch(obj);
};
export const setChatBarSettings = function setChatBarSettings(arg0) {
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "ACCESSIBILITY_SET_CHAT_BAR_SETTINGS" };
  const merged = Object.assign(arg0);
  obj.dispatch(obj);
};
export const setHDRDynamicRange = function setHDRDynamicRange(hdrDynamicRange) {
  let obj = importDefault(dependencyMap[4]);
  obj = { hdrDynamicRange };
  obj.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: obj });
};
