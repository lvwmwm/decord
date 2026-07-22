// Module ID: 4120
// Function ID: 34198
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4120 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function maybeApplyNoTextColorForLightCustomTheme() {
  let tmp = !obj.officialMessageStyleExplicitlySet;
  if (tmp) {
    let tmp3 = "default" !== obj.officialMessageStyle;
    if (!tmp3) {
      tmp3 = theme.theme !== ThemeTypes.LIGHT;
    }
    if (!tmp3) {
      const ClientThemeSettings = arg1(dependencyMap[11]).ClientThemeSettings;
      const setting = ClientThemeSettings.getSetting();
      let tmp10 = null != setting.backgroundGradientPresetId;
      if (!tmp10) {
        const customUserThemeSettings = setting.customUserThemeSettings;
        let length;
        if (null != customUserThemeSettings) {
          const colors = customUserThemeSettings.colors;
          if (null != colors) {
            length = colors.length;
          }
        }
        let num3 = 0;
        if (null != length) {
          num3 = length;
        }
        tmp10 = num3 > 0;
      }
      tmp3 = !tmp10;
    }
    let flag = !tmp3;
    if (!tmp3) {
      obj.officialMessageStyle = "no_text_color";
      flag = true;
    }
    tmp = flag;
  }
  return tmp;
}
let closure_3 = [false];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
const tmp2 = arg1(dependencyMap[8]);
const Accessibility = tmp2.Accessibility;
const ThemeTypes = tmp2.ThemeTypes;
({ MESSAGE_GROUP_SPACING: closure_14, DEFAULT_COMPACT_SPACING: closure_15, DEFAULT_COZY_SPACING: closure_16 } = arg1(dependencyMap[9]));
let obj = { DEFAULT: "default", HIGH: "high" };
obj = { FLEXIBLE: "flexible", CONDENSED: "condensed", HIDDEN: "hidden" };
obj = { fontSize: Accessibility.FONT_SIZE_DEFAULT, zoom: Accessibility.ZOOM_DEFAULT, contrastMode: obj.DEFAULT, expressionPickerFormat: obj.FLEXIBLE, condensePickerWhenNarrow: true, emojiButtonEnabled: true, gifButtonEnabled: true, stickerButtonEnabled: true };
let closure_21 = {};
let tmp4 = (DeviceSettingsStore) => {
  class AccessibilityStore {
    constructor() {
      self = this;
      tmp = closure_5(this, AccessibilityStore);
      obj = closure_8(AccessibilityStore);
      tmp2 = closure_7;
      if (closure_22()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_8;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_8(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = AccessibilityStore;
  callback3(AccessibilityStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      const self = this;
      this.waitFor(closure_11);
      const obj = {};
      const merged = Object.assign(closure_19);
      let tmp3 = null;
      if (null != arg0) {
        tmp3 = arg0;
      }
      const merged1 = Object.assign(tmp3);
      if (isNaN(obj.fontSize)) {
        obj.fontSize = constants.FONT_SIZE_DEFAULT;
      }
      let num = -1;
      if (null != obj.messageGroupSpacing) {
        num = obj.messageGroupSpacing;
      }
      if (closure_14.indexOf(num) < 0) {
        obj.messageGroupSpacing = null;
      }
      const items = [closure_11];
      self.syncWith(items, closure_23);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "fontScale",
    get() {
      return styles.fontSize / constants.FONT_SIZE_DEFAULT * 100;
    }
  };
  items[1] = obj;
  obj = {
    key: "fontSize",
    get() {
      return styles.fontSize;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isFontScaledUp",
    get() {
      return styles.fontSize > constants.FONT_SIZE_DEFAULT;
    }
  };
  items[4] = {
    key: "isFontScaledDown",
    get() {
      return styles.fontSize < constants.FONT_SIZE_DEFAULT;
    }
  };
  items[5] = {
    key: "fontScaleClass",
    get() {
      const self = this;
      let str = "";
      if (null != closure_21[this.fontSize]) {
        str = tmp;
      }
      if (self.isFontScaledUp) {
        const _HermesInternal2 = HermesInternal;
        let combined = "a11y-font-scaled-up " + str;
      } else {
        const _HermesInternal = HermesInternal;
        if (self.isFontScaledDown) {
          combined = concat(str);
        } else {
          combined = concat(str);
        }
      }
      return combined;
    }
  };
  items[6] = {
    key: "zoom",
    get() {
      return styles.zoom;
    }
  };
  items[7] = {
    key: "isZoomedIn",
    get() {
      return styles.zoom > constants.ZOOM_DEFAULT;
    }
  };
  items[8] = {
    key: "isZoomedOut",
    get() {
      return styles.zoom < constants.ZOOM_DEFAULT;
    }
  };
  items[9] = {
    key: "keyboardModeEnabled",
    get() {
      return styles.keyboardModeEnabled;
    }
  };
  items[10] = {
    key: "colorblindMode",
    get() {
      return styles.colorblindMode;
    }
  };
  items[11] = {
    key: "lowContrastMode",
    get() {
      return styles.lowContrastMode;
    }
  };
  items[12] = {
    key: "saturation",
    get() {
      return styles.saturation;
    }
  };
  items[13] = {
    key: "contrast",
    get() {
      return styles.contrast;
    }
  };
  items[14] = {
    key: "desaturateUserColors",
    get() {
      return styles.desaturateUserColors;
    }
  };
  items[15] = {
    key: "forcedColorsModalSeen",
    get() {
      return styles.forcedColorsModalSeen;
    }
  };
  items[16] = {
    key: "keyboardNavigationExplainerModalSeen",
    get() {
      return styles.keyboardNavigationExplainerModalSeen;
    }
  };
  items[17] = {
    key: "messageGroupSpacing",
    get() {
      if (null != styles.messageGroupSpacing) {
        let messageGroupSpacing = styles.messageGroupSpacing;
      } else {
        const MessageDisplayCompact = AccessibilityStore(closure_2[11]).MessageDisplayCompact;
        messageGroupSpacing = MessageDisplayCompact.getSetting() ? closure_15 : closure_16;
      }
      return messageGroupSpacing;
    }
  };
  items[18] = {
    key: "isMessageGroupSpacingIncreased",
    get() {
      const MessageDisplayCompact = AccessibilityStore(closure_2[11]).MessageDisplayCompact;
      return this.messageGroupSpacing > MessageDisplayCompact.getSetting() ? closure_15 : closure_16;
    }
  };
  items[19] = {
    key: "isMessageGroupSpacingDecreased",
    get() {
      const MessageDisplayCompact = AccessibilityStore(closure_2[11]).MessageDisplayCompact;
      return this.messageGroupSpacing < MessageDisplayCompact.getSetting() ? closure_15 : closure_16;
    }
  };
  items[20] = {
    key: "isSubmitButtonEnabled",
    get() {
      return styles.submitButtonEnabled;
    }
  };
  items[21] = {
    key: "syncProfileThemeWithUserTheme",
    get() {
      return styles.syncProfileThemeWithUserTheme;
    }
  };
  items[22] = {
    key: "systemPrefersReducedMotion",
    get() {
      return styles.systemPrefersReducedMotion;
    }
  };
  items[23] = {
    key: "rawPrefersReducedMotion",
    get() {
      return styles.prefersReducedMotion;
    }
  };
  items[24] = {
    key: "useReducedMotion",
    get() {
      const prefersReducedMotion = styles.prefersReducedMotion;
      if ("no-preference" === prefersReducedMotion) {
        return false;
      } else if ("reduce" === prefersReducedMotion) {
        return true;
      } else {
        return "reduce" === styles.systemPrefersReducedMotion;
      }
    }
  };
  items[25] = {
    key: "systemForcedColors",
    get() {
      return styles.systemForcedColors;
    }
  };
  items[26] = {
    key: "syncForcedColors",
    get() {
      return styles.syncForcedColors;
    }
  };
  items[27] = {
    key: "useForcedColors",
    get() {
      let tmp = !styles.syncForcedColors;
      if (!tmp) {
        tmp = "active" !== styles.systemForcedColors;
      }
      return !tmp;
    }
  };
  items[28] = {
    key: "systemPrefersContrast",
    get() {
      return styles.systemPrefersContrast;
    }
  };
  items[29] = {
    key: "systemPrefersCrossfades",
    get() {
      return styles.systemPrefersCrossfades;
    }
  };
  items[30] = {
    key: "alwaysShowLinkDecorations",
    get() {
      return styles.alwaysShowLinkDecorations;
    }
  };
  items[31] = {
    key: "enableCustomCursor",
    get() {
      return styles.enableCustomCursor;
    }
  };
  items[32] = {
    key: "roleStyle",
    get() {
      return styles.roleStyle;
    }
  };
  items[33] = {
    key: "officialMessageStyle",
    get() {
      return styles.officialMessageStyle;
    }
  };
  items[34] = {
    key: "displayNameStylesEnabled",
    get() {
      return styles.displayNameStylesEnabled;
    }
  };
  items[35] = {
    key: "isHighContrastModeEnabled",
    get() {
      return styles.contrastMode === constants2.HIGH;
    }
  };
  items[36] = {
    key: "isSwitchIconsEnabled",
    get() {
      return styles.switchIconsEnabled;
    }
  };
  items[37] = {
    key: "isAppsButtonEnabled",
    get() {
      return styles.appsButtonEnabled;
    }
  };
  items[38] = {
    key: "expressionPickerFormat",
    get() {
      return styles.expressionPickerFormat;
    }
  };
  items[39] = {
    key: "condensePickerWhenNarrow",
    get() {
      return styles.condensePickerWhenNarrow;
    }
  };
  items[40] = {
    key: "isEmojiButtonEnabled",
    get() {
      return styles.emojiButtonEnabled;
    }
  };
  items[41] = {
    key: "isGifButtonEnabled",
    get() {
      return styles.gifButtonEnabled;
    }
  };
  items[42] = {
    key: "isStickerButtonEnabled",
    get() {
      return styles.stickerButtonEnabled;
    }
  };
  items[43] = {
    key: "getUserAgnosticState",
    value() {
      return closure_20;
    }
  };
  return callback2(AccessibilityStore, items);
}(importDefault(dependencyMap[12]).DeviceSettingsStore);
tmp4.displayName = "AccessibilityStore";
tmp4.persistKey = "AccessibilityStore";
const items = [
  () => {
    const Storage = arg1(dependencyMap[13]).Storage;
    const Storage2 = arg1(dependencyMap[13]).Storage;
    let ZOOM_DEFAULT = Storage2.get("a11yZoom");
    if (!ZOOM_DEFAULT) {
      ZOOM_DEFAULT = Accessibility.ZOOM_DEFAULT;
    }
    const Storage3 = arg1(dependencyMap[13]).Storage;
    const tmp = Storage.get("a11yFontScale") || 100;
    const Storage4 = arg1(dependencyMap[13]).Storage;
    Storage4.remove("a11yFontScale");
    const Storage5 = arg1(dependencyMap[13]).Storage;
    Storage5.remove("a11yZoom");
    const Storage6 = arg1(dependencyMap[13]).Storage;
    Storage6.remove("a11yColorblindMode");
    const obj = { fontScale: tmp, zoom: ZOOM_DEFAULT, colorblindMode: Storage3.get("a11yColorblindMode") || false, keyboardModeEnabled: false };
    return obj;
  },
  (fontScale) => {
    fontScale = fontScale.fontScale;
    if (82 === fontScale) {
      let num4 = 12;
    } else if (92 === fontScale) {
      num4 = 15;
    } else {
      num4 = 16;
      if (100 !== fontScale) {
        if (110 === fontScale) {
          num4 = 18;
        } else if (125 === fontScale) {
          num4 = 20;
        } else {
          num4 = 16;
          if (150 === fontScale) {
            num4 = 24;
          }
        }
      }
    }
    const obj = {};
    const merged = Object.assign(callback(fontScale, closure_3));
    obj["fontSize"] = num4;
    return obj;
  },
  (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["darkSidebar"] = false;
    return obj;
  },
  (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["messageGroupSpacing"] = null;
    return obj;
  },
  (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["systemPrefersReducedMotion"] = "no-preference";
    obj["prefersReducedMotion"] = "auto";
    return obj;
  },
  (saturation) => {
    const obj = {};
    const merged = Object.assign(saturation);
    obj["alwaysShowLinkDecorations"] = saturation.saturation <= arg1(dependencyMap[14]).LOW_SATURATION_THRESHOLD;
    return obj;
  },
  (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["disableVoiceBackgrounds"] = false;
    return obj;
  },
  (arg0) => {
    // DelByIdLong (0x48)
  },
  (arg0) => {
    // DelByIdLong (0x48)
  },
  (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["enableCustomCursor"] = true;
    return obj;
  },
  (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["appsButtonEnabled"] = true;
    obj["expressionPickerFormat"] = obj.FLEXIBLE;
    obj["condensePickerWhenNarrow"] = true;
    obj["emojiButtonEnabled"] = true;
    obj["gifButtonEnabled"] = true;
    obj["stickerButtonEnabled"] = true;
    return obj;
  }
];
tmp4.migrations = items;
tmp4 = new tmp4(importDefault(dependencyMap[15]), {
  ACCESSIBILITY_SET_FONT_SIZE: function handleFontScaleTo(fontSize) {
    let FONT_SIZE_DEFAULT = fontSize.fontSize;
    const FONT_SIZES = Accessibility.FONT_SIZES;
    if (FONT_SIZES.indexOf(FONT_SIZE_DEFAULT) < 0) {
      FONT_SIZE_DEFAULT = Accessibility.FONT_SIZE_DEFAULT;
    }
    if (FONT_SIZE_DEFAULT <= Accessibility.FONT_SIZE_MAX) {
      if (FONT_SIZE_DEFAULT >= Accessibility.FONT_SIZE_MIN) {
        if (obj.fontSize !== FONT_SIZE_DEFAULT) {
          const obj = {};
          const merged = Object.assign(obj);
          obj.fontSize = FONT_SIZE_DEFAULT;
        }
      }
    }
    return false;
  },
  ACCESSIBILITY_SET_ZOOM: function handleZoomTo(zoom) {
    if (zoom.zoom >= Accessibility.ZOOM_MIN) {
      if (zoom.zoom <= Accessibility.ZOOM_MAX) {
        if (obj.zoom !== zoom.zoom) {
          const obj = {};
          const merged = Object.assign(obj);
          obj.zoom = zoom.zoom;
          importDefault(dependencyMap[10]).setZoomFactor(obj.zoom);
        }
      }
    }
    return false;
  },
  ACCESSIBILITY_RESET_TO_DEFAULT: function handleResetToDefault() {
    if (obj.fontSize === Accessibility.FONT_SIZE_DEFAULT) {
      if (obj.zoom === Accessibility.ZOOM_DEFAULT) {
        return false;
      }
    }
    const obj = {};
    const merged = Object.assign(obj);
    if (obj.fontSize !== Accessibility.FONT_SIZE_DEFAULT) {
      obj.fontSize = Accessibility.FONT_SIZE_DEFAULT;
    }
    if (obj.zoom !== Accessibility.ZOOM_DEFAULT) {
      obj.zoom = Accessibility.ZOOM_DEFAULT;
      importDefault(dependencyMap[10]).setZoomFactor(obj.zoom);
      const obj2 = importDefault(dependencyMap[10]);
    }
  },
  ACCESSIBILITY_KEYBOARD_MODE_ENABLE: function handleEnableKeyboardMode() {
    if (obj.keyboardModeEnabled) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(obj);
      obj.keyboardModeEnabled = true;
    }
  },
  ACCESSIBILITY_KEYBOARD_MODE_DISABLE: function handleDisableKeyboardMode() {
    if (obj.keyboardModeEnabled) {
      const obj = {};
      const merged = Object.assign(obj);
      obj.keyboardModeEnabled = false;
    } else {
      return false;
    }
  },
  ACCESSIBILITY_COLORBLIND_TOGGLE: function handleToggleColorblindMode() {
    const obj = {};
    const merged = Object.assign(obj);
    obj.colorblindMode = !obj.colorblindMode;
  },
  ACCESSIBILITY_LOW_CONTRAST_TOGGLE: function handleToggleLowContrastMode() {
    const obj = {};
    const merged = Object.assign(obj);
    obj.lowContrastMode = !obj.lowContrastMode;
  },
  ACCESSIBILITY_SET_SATURATION: function handleSetSaturation(saturation) {
    const obj = {};
    const merged = Object.assign(obj);
    obj.saturation = saturation.saturation;
  },
  ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: function handledesaturateUserColorsToggle() {
    const obj = {};
    const merged = Object.assign(obj);
    obj.desaturateUserColors = !obj.desaturateUserColors;
  },
  ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function handleSystemColorPreferencesChanged(systemForcedColors) {
    const obj = {};
    const merged = Object.assign(obj);
    systemForcedColors = systemForcedColors.systemForcedColors;
    let str = "none";
    if (null != systemForcedColors) {
      str = systemForcedColors;
    }
    obj["systemForcedColors"] = str;
  },
  ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: function handleSystemPrefersContrastChanged(systemPrefersContrast) {
    if (obj.systemPrefersContrast === systemPrefersContrast.systemPrefersContrast) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(obj);
      obj["systemPrefersContrast"] = systemPrefersContrast.systemPrefersContrast;
    }
  },
  ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: function handleSystemPrefersReducedMotionChanged(systemPrefersReducedMotion) {
    if (obj.systemPrefersReducedMotion === systemPrefersReducedMotion.systemPrefersReducedMotion) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(obj);
      obj["systemPrefersReducedMotion"] = systemPrefersReducedMotion.systemPrefersReducedMotion;
    }
  },
  ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: function handleSystemPrefersCrossfadesChanged(systemPrefersCrossfades) {
    if (obj.systemPrefersCrossfades === systemPrefersCrossfades.systemPrefersCrossfades) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(obj);
      obj["systemPrefersCrossfades"] = systemPrefersCrossfades.systemPrefersCrossfades;
    }
  },
  ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: function handleSetPrefersReducedMotion(prefersReducedMotion) {
    if (obj.prefersReducedMotion === prefersReducedMotion.prefersReducedMotion) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(obj);
      obj["prefersReducedMotion"] = prefersReducedMotion.prefersReducedMotion;
    }
  },
  ACCESSIBILITY_SET_SYNC_FORCED_COLORS: function handleSetSyncForcedColors(syncForcedColors) {
    obj.syncForcedColors = syncForcedColors.syncForcedColors;
  },
  ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: function handleSetAlwaysShowLinkDecorations(alwaysShowLinkDecorations) {
    const obj = {};
    const merged = Object.assign(obj);
    obj["alwaysShowLinkDecorations"] = alwaysShowLinkDecorations.alwaysShowLinkDecorations;
  },
  ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR: function handleSetEnableCustomCursor(enableCustomCursor) {
    const obj = {};
    const merged = Object.assign(obj);
    obj["enableCustomCursor"] = enableCustomCursor.enableCustomCursor;
  },
  ACCESSIBILITY_SET_ROLE_STYLE: function handleSetRoleStyle(roleStyle) {
    obj.roleStyle = roleStyle.roleStyle;
  },
  ACCESSIBILITY_SET_OFFICIAL_MESSAGE_STYLE: function handleSetOfficialMessageStyle(officialMessageStyle) {
    obj.officialMessageStyle = officialMessageStyle.officialMessageStyle;
    obj.officialMessageStyleExplicitlySet = true;
  },
  ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED: function handleSetDisplayNameStylesEnabled(enabled) {
    obj.displayNameStylesEnabled = enabled.enabled;
  },
  ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: function handleForcedColorsModalSeen() {
    obj.forcedColorsModalSeen = true;
  },
  KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: function handleKeyboardNavigationExplainerModalSeen() {
    const obj = {};
    const merged = Object.assign(obj);
    obj["keyboardNavigationExplainerModalSeen"] = true;
  },
  ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: function handleMessageGroupSpacingChange(messageGroupSpacing) {
    const obj = {};
    const merged = Object.assign(obj);
    obj["messageGroupSpacing"] = messageGroupSpacing.messageGroupSpacing;
  },
  ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: function handleSubmitButtonToggle() {
    const obj = {};
    const merged = Object.assign(obj);
    obj.submitButtonEnabled = !obj.submitButtonEnabled;
  },
  ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: function handleSyncProfileThemeWithUserThemeToggle() {
    const obj = {};
    const merged = Object.assign(obj);
    obj.syncProfileThemeWithUserTheme = !obj.syncProfileThemeWithUserTheme;
  },
  ACCESSIBILITY_SET_CONTRAST: function handleSetContrast(contrast) {
    const obj = {};
    const merged = Object.assign(obj);
    obj["contrast"] = contrast.contrast;
  },
  ACCESSIBILITY_SET_CONTRAST_MODE: function handleSetContrastMode(contrastMode) {
    const obj = {};
    const merged = Object.assign(obj);
    obj["contrastMode"] = contrastMode.contrastMode;
  },
  ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED: function handleSetSwitchIconsEnabled(switchIconsEnabled) {
    const obj = {};
    const merged = Object.assign(obj);
    obj["switchIconsEnabled"] = switchIconsEnabled.switchIconsEnabled;
  },
  ACCESSIBILITY_SET_CHAT_BAR_SETTINGS: function handleSetChatBarSettings(appsButtonEnabled) {
    let obj = {};
    const merged = Object.assign(obj);
    let tmp2 = null != appsButtonEnabled.appsButtonEnabled;
    if (tmp2) {
      obj = { appsButtonEnabled: appsButtonEnabled.appsButtonEnabled };
      tmp2 = obj;
    }
    const merged1 = Object.assign(tmp2);
    let tmp4 = null != appsButtonEnabled.expressionPickerFormat;
    if (tmp4) {
      obj = { expressionPickerFormat: appsButtonEnabled.expressionPickerFormat };
      tmp4 = obj;
    }
    const merged2 = Object.assign(tmp4);
    let tmp6 = null != appsButtonEnabled.condensePickerWhenNarrow;
    if (tmp6) {
      const obj1 = { condensePickerWhenNarrow: appsButtonEnabled.condensePickerWhenNarrow };
      tmp6 = obj1;
    }
    const merged3 = Object.assign(tmp6);
    let tmp8 = null != appsButtonEnabled.emojiButtonEnabled;
    if (tmp8) {
      const obj2 = { emojiButtonEnabled: appsButtonEnabled.emojiButtonEnabled };
      tmp8 = obj2;
    }
    const merged4 = Object.assign(tmp8);
    let tmp10 = null != appsButtonEnabled.gifButtonEnabled;
    if (tmp10) {
      const obj3 = { gifButtonEnabled: appsButtonEnabled.gifButtonEnabled };
      tmp10 = obj3;
    }
    const merged5 = Object.assign(tmp10);
    let tmp12 = null != appsButtonEnabled.stickerButtonEnabled;
    if (tmp12) {
      const obj4 = { stickerButtonEnabled: appsButtonEnabled.stickerButtonEnabled };
      tmp12 = obj4;
    }
    const merged6 = Object.assign(tmp12);
  }
});
const obj1 = {
  ACCESSIBILITY_SET_FONT_SIZE: function handleFontScaleTo(fontSize) {
    let FONT_SIZE_DEFAULT = fontSize.fontSize;
    const FONT_SIZES = Accessibility.FONT_SIZES;
    if (FONT_SIZES.indexOf(FONT_SIZE_DEFAULT) < 0) {
      FONT_SIZE_DEFAULT = Accessibility.FONT_SIZE_DEFAULT;
    }
    if (FONT_SIZE_DEFAULT <= Accessibility.FONT_SIZE_MAX) {
      if (FONT_SIZE_DEFAULT >= Accessibility.FONT_SIZE_MIN) {
        if (obj.fontSize !== FONT_SIZE_DEFAULT) {
          const obj = {};
          const merged = Object.assign(obj);
          obj.fontSize = FONT_SIZE_DEFAULT;
        }
      }
    }
    return false;
  },
  ACCESSIBILITY_SET_ZOOM: function handleZoomTo(zoom) {
    if (zoom.zoom >= Accessibility.ZOOM_MIN) {
      if (zoom.zoom <= Accessibility.ZOOM_MAX) {
        if (obj.zoom !== zoom.zoom) {
          const obj = {};
          const merged = Object.assign(obj);
          obj.zoom = zoom.zoom;
          importDefault(dependencyMap[10]).setZoomFactor(obj.zoom);
        }
      }
    }
    return false;
  },
  ACCESSIBILITY_RESET_TO_DEFAULT: function handleResetToDefault() {
    if (obj.fontSize === Accessibility.FONT_SIZE_DEFAULT) {
      if (obj.zoom === Accessibility.ZOOM_DEFAULT) {
        return false;
      }
    }
    const obj = {};
    const merged = Object.assign(obj);
    if (obj.fontSize !== Accessibility.FONT_SIZE_DEFAULT) {
      obj.fontSize = Accessibility.FONT_SIZE_DEFAULT;
    }
    if (obj.zoom !== Accessibility.ZOOM_DEFAULT) {
      obj.zoom = Accessibility.ZOOM_DEFAULT;
      importDefault(dependencyMap[10]).setZoomFactor(obj.zoom);
      const obj2 = importDefault(dependencyMap[10]);
    }
  },
  ACCESSIBILITY_KEYBOARD_MODE_ENABLE: function handleEnableKeyboardMode() {
    if (obj.keyboardModeEnabled) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(obj);
      obj.keyboardModeEnabled = true;
    }
  },
  ACCESSIBILITY_KEYBOARD_MODE_DISABLE: function handleDisableKeyboardMode() {
    if (obj.keyboardModeEnabled) {
      const obj = {};
      const merged = Object.assign(obj);
      obj.keyboardModeEnabled = false;
    } else {
      return false;
    }
  },
  ACCESSIBILITY_COLORBLIND_TOGGLE: function handleToggleColorblindMode() {
    const obj = {};
    const merged = Object.assign(obj);
    obj.colorblindMode = !obj.colorblindMode;
  },
  ACCESSIBILITY_LOW_CONTRAST_TOGGLE: function handleToggleLowContrastMode() {
    const obj = {};
    const merged = Object.assign(obj);
    obj.lowContrastMode = !obj.lowContrastMode;
  },
  ACCESSIBILITY_SET_SATURATION: function handleSetSaturation(saturation) {
    const obj = {};
    const merged = Object.assign(obj);
    obj.saturation = saturation.saturation;
  },
  ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: function handledesaturateUserColorsToggle() {
    const obj = {};
    const merged = Object.assign(obj);
    obj.desaturateUserColors = !obj.desaturateUserColors;
  },
  ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function handleSystemColorPreferencesChanged(systemForcedColors) {
    const obj = {};
    const merged = Object.assign(obj);
    systemForcedColors = systemForcedColors.systemForcedColors;
    let str = "none";
    if (null != systemForcedColors) {
      str = systemForcedColors;
    }
    obj["systemForcedColors"] = str;
  },
  ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: function handleSystemPrefersContrastChanged(systemPrefersContrast) {
    if (obj.systemPrefersContrast === systemPrefersContrast.systemPrefersContrast) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(obj);
      obj["systemPrefersContrast"] = systemPrefersContrast.systemPrefersContrast;
    }
  },
  ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: function handleSystemPrefersReducedMotionChanged(systemPrefersReducedMotion) {
    if (obj.systemPrefersReducedMotion === systemPrefersReducedMotion.systemPrefersReducedMotion) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(obj);
      obj["systemPrefersReducedMotion"] = systemPrefersReducedMotion.systemPrefersReducedMotion;
    }
  },
  ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: function handleSystemPrefersCrossfadesChanged(systemPrefersCrossfades) {
    if (obj.systemPrefersCrossfades === systemPrefersCrossfades.systemPrefersCrossfades) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(obj);
      obj["systemPrefersCrossfades"] = systemPrefersCrossfades.systemPrefersCrossfades;
    }
  },
  ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: function handleSetPrefersReducedMotion(prefersReducedMotion) {
    if (obj.prefersReducedMotion === prefersReducedMotion.prefersReducedMotion) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(obj);
      obj["prefersReducedMotion"] = prefersReducedMotion.prefersReducedMotion;
    }
  },
  ACCESSIBILITY_SET_SYNC_FORCED_COLORS: function handleSetSyncForcedColors(syncForcedColors) {
    obj.syncForcedColors = syncForcedColors.syncForcedColors;
  },
  ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: function handleSetAlwaysShowLinkDecorations(alwaysShowLinkDecorations) {
    const obj = {};
    const merged = Object.assign(obj);
    obj["alwaysShowLinkDecorations"] = alwaysShowLinkDecorations.alwaysShowLinkDecorations;
  },
  ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR: function handleSetEnableCustomCursor(enableCustomCursor) {
    const obj = {};
    const merged = Object.assign(obj);
    obj["enableCustomCursor"] = enableCustomCursor.enableCustomCursor;
  },
  ACCESSIBILITY_SET_ROLE_STYLE: function handleSetRoleStyle(roleStyle) {
    obj.roleStyle = roleStyle.roleStyle;
  },
  ACCESSIBILITY_SET_OFFICIAL_MESSAGE_STYLE: function handleSetOfficialMessageStyle(officialMessageStyle) {
    obj.officialMessageStyle = officialMessageStyle.officialMessageStyle;
    obj.officialMessageStyleExplicitlySet = true;
  },
  ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED: function handleSetDisplayNameStylesEnabled(enabled) {
    obj.displayNameStylesEnabled = enabled.enabled;
  },
  ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: function handleForcedColorsModalSeen() {
    obj.forcedColorsModalSeen = true;
  },
  KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: function handleKeyboardNavigationExplainerModalSeen() {
    const obj = {};
    const merged = Object.assign(obj);
    obj["keyboardNavigationExplainerModalSeen"] = true;
  },
  ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: function handleMessageGroupSpacingChange(messageGroupSpacing) {
    const obj = {};
    const merged = Object.assign(obj);
    obj["messageGroupSpacing"] = messageGroupSpacing.messageGroupSpacing;
  },
  ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: function handleSubmitButtonToggle() {
    const obj = {};
    const merged = Object.assign(obj);
    obj.submitButtonEnabled = !obj.submitButtonEnabled;
  },
  ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: function handleSyncProfileThemeWithUserThemeToggle() {
    const obj = {};
    const merged = Object.assign(obj);
    obj.syncProfileThemeWithUserTheme = !obj.syncProfileThemeWithUserTheme;
  },
  ACCESSIBILITY_SET_CONTRAST: function handleSetContrast(contrast) {
    const obj = {};
    const merged = Object.assign(obj);
    obj["contrast"] = contrast.contrast;
  },
  ACCESSIBILITY_SET_CONTRAST_MODE: function handleSetContrastMode(contrastMode) {
    const obj = {};
    const merged = Object.assign(obj);
    obj["contrastMode"] = contrastMode.contrastMode;
  },
  ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED: function handleSetSwitchIconsEnabled(switchIconsEnabled) {
    const obj = {};
    const merged = Object.assign(obj);
    obj["switchIconsEnabled"] = switchIconsEnabled.switchIconsEnabled;
  },
  ACCESSIBILITY_SET_CHAT_BAR_SETTINGS: function handleSetChatBarSettings(appsButtonEnabled) {
    let obj = {};
    const merged = Object.assign(obj);
    let tmp2 = null != appsButtonEnabled.appsButtonEnabled;
    if (tmp2) {
      obj = { appsButtonEnabled: appsButtonEnabled.appsButtonEnabled };
      tmp2 = obj;
    }
    const merged1 = Object.assign(tmp2);
    let tmp4 = null != appsButtonEnabled.expressionPickerFormat;
    if (tmp4) {
      obj = { expressionPickerFormat: appsButtonEnabled.expressionPickerFormat };
      tmp4 = obj;
    }
    const merged2 = Object.assign(tmp4);
    let tmp6 = null != appsButtonEnabled.condensePickerWhenNarrow;
    if (tmp6) {
      const obj1 = { condensePickerWhenNarrow: appsButtonEnabled.condensePickerWhenNarrow };
      tmp6 = obj1;
    }
    const merged3 = Object.assign(tmp6);
    let tmp8 = null != appsButtonEnabled.emojiButtonEnabled;
    if (tmp8) {
      const obj2 = { emojiButtonEnabled: appsButtonEnabled.emojiButtonEnabled };
      tmp8 = obj2;
    }
    const merged4 = Object.assign(tmp8);
    let tmp10 = null != appsButtonEnabled.gifButtonEnabled;
    if (tmp10) {
      const obj3 = { gifButtonEnabled: appsButtonEnabled.gifButtonEnabled };
      tmp10 = obj3;
    }
    const merged5 = Object.assign(tmp10);
    let tmp12 = null != appsButtonEnabled.stickerButtonEnabled;
    if (tmp12) {
      const obj4 = { stickerButtonEnabled: appsButtonEnabled.stickerButtonEnabled };
      tmp12 = obj4;
    }
    const merged6 = Object.assign(tmp12);
  }
};
const tmp3 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/a11y/AccessibilityStore.tsx");

export default tmp4;
export const AccessibilityContrastMode = obj;
export const ExpressionPickerFormat = obj;
