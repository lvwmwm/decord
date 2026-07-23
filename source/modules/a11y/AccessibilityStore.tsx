// Module ID: 4122
// Function ID: 34207
// Name: _isNativeReflectConstruct
// Dependencies: [29, 6, 7, 15, 17, 18, 1278, 1316, 653, 4123, 4124, 3803, 566, 587, 3976, 686, 2]

// Module 4122 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import dispatcher from "dispatcher";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";
import MESSAGE_GROUP_SPACING from "MESSAGE_GROUP_SPACING";

let closure_14;
let closure_15;
let closure_16;
const require = arg1;
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
      const ClientThemeSettings = require(3803) /* explicitContentFromProto */.ClientThemeSettings;
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
let closure_3 = ["fontScale"];
const Accessibility = ME.Accessibility;
const ThemeTypes = ME.ThemeTypes;
({ MESSAGE_GROUP_SPACING: closure_14, DEFAULT_COMPACT_SPACING: closure_15, DEFAULT_COZY_SPACING: closure_16 } = MESSAGE_GROUP_SPACING);
let obj = { DEFAULT: "default", HIGH: "high" };
obj = { FLEXIBLE: "flexible", CONDENSED: "condensed", HIDDEN: "hidden" };
obj = { fontSize: null, zoom: null, keyboardModeEnabled: false, contrastMode: null, colorblindMode: false, lowContrastMode: false, saturation: 1, contrast: 1, desaturateUserColors: false, forcedColorsModalSeen: false, keyboardNavigationExplainerModalSeen: false, messageGroupSpacing: null, systemPrefersReducedMotion: "no-preference", systemPrefersCrossfades: false, prefersReducedMotion: "auto", systemForcedColors: "none", syncForcedColors: true, systemPrefersContrast: "no-preference", alwaysShowLinkDecorations: false, roleStyle: "username", officialMessageStyle: "default", officialMessageStyleExplicitlySet: false, displayNameStylesEnabled: true, submitButtonEnabled: false, syncProfileThemeWithUserTheme: false, enableCustomCursor: true, switchIconsEnabled: false, appsButtonEnabled: true };
({ FONT_SIZE_DEFAULT: obj3.fontSize, ZOOM_DEFAULT: obj3.zoom } = Accessibility);
obj.contrastMode = obj.DEFAULT;
obj.expressionPickerFormat = obj.FLEXIBLE;
obj.condensePickerWhenNarrow = true;
obj.emojiButtonEnabled = true;
obj.gifButtonEnabled = true;
obj.stickerButtonEnabled = true;
let closure_21 = { 12: "font-size-12", 14: "font-size-14", 15: "font-size-15", 16: "font-size-16", 18: "font-size-18", 20: "font-size-20", 24: "font-size-24" };
let tmp4 = ((DeviceSettingsStore) => {
  class AccessibilityStore {
    constructor() {
      self = this;
      tmp = outer1_5(this, AccessibilityStore);
      obj = outer1_8(AccessibilityStore);
      tmp2 = outer1_7;
      if (outer1_22()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_8;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_8(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback3(AccessibilityStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      const self = this;
      this.waitFor(outer1_11);
      const merged = Object.assign(outer1_19);
      let tmp3 = null;
      if (null != arg0) {
        tmp3 = arg0;
      }
      const merged1 = Object.assign(tmp3);
      const outer1_20 = {};
      if (isNaN(outer1_20.fontSize)) {
        outer1_20.fontSize = outer1_12.FONT_SIZE_DEFAULT;
      }
      let num = -1;
      if (null != outer1_20.messageGroupSpacing) {
        num = outer1_20.messageGroupSpacing;
      }
      if (outer1_14.indexOf(num) < 0) {
        outer1_20.messageGroupSpacing = null;
      }
      const items = [outer1_11];
      self.syncWith(items, outer1_23);
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "fontScale",
    get() {
      return outer1_20.fontSize / outer1_12.FONT_SIZE_DEFAULT * 100;
    }
  };
  items[1] = obj;
  obj = {
    key: "fontSize",
    get() {
      return outer1_20.fontSize;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isFontScaledUp",
    get() {
      return outer1_20.fontSize > outer1_12.FONT_SIZE_DEFAULT;
    }
  };
  items[4] = {
    key: "isFontScaledDown",
    get() {
      return outer1_20.fontSize < outer1_12.FONT_SIZE_DEFAULT;
    }
  };
  items[5] = {
    key: "fontScaleClass",
    get() {
      const self = this;
      let str = "";
      if (null != outer1_21[this.fontSize]) {
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
      return outer1_20.zoom;
    }
  };
  items[7] = {
    key: "isZoomedIn",
    get() {
      return outer1_20.zoom > outer1_12.ZOOM_DEFAULT;
    }
  };
  items[8] = {
    key: "isZoomedOut",
    get() {
      return outer1_20.zoom < outer1_12.ZOOM_DEFAULT;
    }
  };
  items[9] = {
    key: "keyboardModeEnabled",
    get() {
      return outer1_20.keyboardModeEnabled;
    }
  };
  items[10] = {
    key: "colorblindMode",
    get() {
      return outer1_20.colorblindMode;
    }
  };
  items[11] = {
    key: "lowContrastMode",
    get() {
      return outer1_20.lowContrastMode;
    }
  };
  items[12] = {
    key: "saturation",
    get() {
      return outer1_20.saturation;
    }
  };
  items[13] = {
    key: "contrast",
    get() {
      return outer1_20.contrast;
    }
  };
  items[14] = {
    key: "desaturateUserColors",
    get() {
      return outer1_20.desaturateUserColors;
    }
  };
  items[15] = {
    key: "forcedColorsModalSeen",
    get() {
      return outer1_20.forcedColorsModalSeen;
    }
  };
  items[16] = {
    key: "keyboardNavigationExplainerModalSeen",
    get() {
      return outer1_20.keyboardNavigationExplainerModalSeen;
    }
  };
  items[17] = {
    key: "messageGroupSpacing",
    get() {
      if (null != outer1_20.messageGroupSpacing) {
        let messageGroupSpacing = outer1_20.messageGroupSpacing;
      } else {
        const MessageDisplayCompact = AccessibilityStore(outer1_2[11]).MessageDisplayCompact;
        messageGroupSpacing = MessageDisplayCompact.getSetting() ? outer1_15 : outer1_16;
      }
      return messageGroupSpacing;
    }
  };
  items[18] = {
    key: "isMessageGroupSpacingIncreased",
    get() {
      const MessageDisplayCompact = AccessibilityStore(outer1_2[11]).MessageDisplayCompact;
      return this.messageGroupSpacing > (MessageDisplayCompact.getSetting() ? outer1_15 : outer1_16);
    }
  };
  items[19] = {
    key: "isMessageGroupSpacingDecreased",
    get() {
      const MessageDisplayCompact = AccessibilityStore(outer1_2[11]).MessageDisplayCompact;
      return this.messageGroupSpacing < (MessageDisplayCompact.getSetting() ? outer1_15 : outer1_16);
    }
  };
  items[20] = {
    key: "isSubmitButtonEnabled",
    get() {
      return outer1_20.submitButtonEnabled;
    }
  };
  items[21] = {
    key: "syncProfileThemeWithUserTheme",
    get() {
      return outer1_20.syncProfileThemeWithUserTheme;
    }
  };
  items[22] = {
    key: "systemPrefersReducedMotion",
    get() {
      return outer1_20.systemPrefersReducedMotion;
    }
  };
  items[23] = {
    key: "rawPrefersReducedMotion",
    get() {
      return outer1_20.prefersReducedMotion;
    }
  };
  items[24] = {
    key: "useReducedMotion",
    get() {
      const prefersReducedMotion = outer1_20.prefersReducedMotion;
      if ("no-preference" === prefersReducedMotion) {
        return false;
      } else if ("reduce" === prefersReducedMotion) {
        return true;
      } else {
        return "reduce" === outer1_20.systemPrefersReducedMotion;
      }
    }
  };
  items[25] = {
    key: "systemForcedColors",
    get() {
      return outer1_20.systemForcedColors;
    }
  };
  items[26] = {
    key: "syncForcedColors",
    get() {
      return outer1_20.syncForcedColors;
    }
  };
  items[27] = {
    key: "useForcedColors",
    get() {
      let tmp = !outer1_20.syncForcedColors;
      if (!tmp) {
        tmp = "active" !== outer1_20.systemForcedColors;
      }
      return !tmp;
    }
  };
  items[28] = {
    key: "systemPrefersContrast",
    get() {
      return outer1_20.systemPrefersContrast;
    }
  };
  items[29] = {
    key: "systemPrefersCrossfades",
    get() {
      return outer1_20.systemPrefersCrossfades;
    }
  };
  items[30] = {
    key: "alwaysShowLinkDecorations",
    get() {
      return outer1_20.alwaysShowLinkDecorations;
    }
  };
  items[31] = {
    key: "enableCustomCursor",
    get() {
      return outer1_20.enableCustomCursor;
    }
  };
  items[32] = {
    key: "roleStyle",
    get() {
      return outer1_20.roleStyle;
    }
  };
  items[33] = {
    key: "officialMessageStyle",
    get() {
      return outer1_20.officialMessageStyle;
    }
  };
  items[34] = {
    key: "displayNameStylesEnabled",
    get() {
      return outer1_20.displayNameStylesEnabled;
    }
  };
  items[35] = {
    key: "isHighContrastModeEnabled",
    get() {
      return outer1_20.contrastMode === outer1_17.HIGH;
    }
  };
  items[36] = {
    key: "isSwitchIconsEnabled",
    get() {
      return outer1_20.switchIconsEnabled;
    }
  };
  items[37] = {
    key: "isAppsButtonEnabled",
    get() {
      return outer1_20.appsButtonEnabled;
    }
  };
  items[38] = {
    key: "expressionPickerFormat",
    get() {
      return outer1_20.expressionPickerFormat;
    }
  };
  items[39] = {
    key: "condensePickerWhenNarrow",
    get() {
      return outer1_20.condensePickerWhenNarrow;
    }
  };
  items[40] = {
    key: "isEmojiButtonEnabled",
    get() {
      return outer1_20.emojiButtonEnabled;
    }
  };
  items[41] = {
    key: "isGifButtonEnabled",
    get() {
      return outer1_20.gifButtonEnabled;
    }
  };
  items[42] = {
    key: "isStickerButtonEnabled",
    get() {
      return outer1_20.stickerButtonEnabled;
    }
  };
  items[43] = {
    key: "getUserAgnosticState",
    value() {
      return outer1_20;
    }
  };
  return callback2(AccessibilityStore, items);
})(require("initialize").DeviceSettingsStore);
tmp4.displayName = "AccessibilityStore";
tmp4.persistKey = "AccessibilityStore";
let items = [
  () => {
    const Storage = require(587) /* Storage */.Storage;
    const Storage2 = require(587) /* Storage */.Storage;
    let ZOOM_DEFAULT = Storage2.get("a11yZoom");
    if (!ZOOM_DEFAULT) {
      ZOOM_DEFAULT = Accessibility.ZOOM_DEFAULT;
    }
    const Storage3 = require(587) /* Storage */.Storage;
    const tmp = Storage.get("a11yFontScale") || 100;
    const Storage4 = require(587) /* Storage */.Storage;
    Storage4.remove("a11yFontScale");
    const Storage5 = require(587) /* Storage */.Storage;
    Storage5.remove("a11yZoom");
    const Storage6 = require(587) /* Storage */.Storage;
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
    obj["alwaysShowLinkDecorations"] = saturation.saturation <= require(3976) /* AccessibilityAnnouncer */.LOW_SATURATION_THRESHOLD;
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
tmp4 = new tmp4(require("dispatcher"), {
  ACCESSIBILITY_SET_FONT_SIZE: function handleFontScaleTo(fontSize) {
    let FONT_SIZE_DEFAULT = fontSize.fontSize;
    const FONT_SIZES = Accessibility.FONT_SIZES;
    if (FONT_SIZES.indexOf(FONT_SIZE_DEFAULT) < 0) {
      FONT_SIZE_DEFAULT = Accessibility.FONT_SIZE_DEFAULT;
    }
    if (FONT_SIZE_DEFAULT <= Accessibility.FONT_SIZE_MAX) {
      if (FONT_SIZE_DEFAULT >= Accessibility.FONT_SIZE_MIN) {
        if (obj.fontSize !== FONT_SIZE_DEFAULT) {
          obj = {};
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
          obj = {};
          const merged = Object.assign(obj);
          obj.zoom = zoom.zoom;
          importDefault(4124).setZoomFactor(obj.zoom);
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
    obj = {};
    const merged = Object.assign(obj);
    if (obj.fontSize !== Accessibility.FONT_SIZE_DEFAULT) {
      obj.fontSize = Accessibility.FONT_SIZE_DEFAULT;
    }
    if (obj.zoom !== Accessibility.ZOOM_DEFAULT) {
      obj.zoom = Accessibility.ZOOM_DEFAULT;
      importDefault(4124).setZoomFactor(obj.zoom);
      const obj2 = importDefault(4124);
    }
  },
  ACCESSIBILITY_KEYBOARD_MODE_ENABLE: function handleEnableKeyboardMode() {
    if (obj.keyboardModeEnabled) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      obj.keyboardModeEnabled = true;
    }
  },
  ACCESSIBILITY_KEYBOARD_MODE_DISABLE: function handleDisableKeyboardMode() {
    if (obj.keyboardModeEnabled) {
      obj = {};
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
      obj = {};
      const merged = Object.assign(obj);
      obj["systemPrefersContrast"] = systemPrefersContrast.systemPrefersContrast;
    }
  },
  ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: function handleSystemPrefersReducedMotionChanged(systemPrefersReducedMotion) {
    if (obj.systemPrefersReducedMotion === systemPrefersReducedMotion.systemPrefersReducedMotion) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      obj["systemPrefersReducedMotion"] = systemPrefersReducedMotion.systemPrefersReducedMotion;
    }
  },
  ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: function handleSystemPrefersCrossfadesChanged(systemPrefersCrossfades) {
    if (obj.systemPrefersCrossfades === systemPrefersCrossfades.systemPrefersCrossfades) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      obj["systemPrefersCrossfades"] = systemPrefersCrossfades.systemPrefersCrossfades;
    }
  },
  ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: function handleSetPrefersReducedMotion(prefersReducedMotion) {
    if (obj.prefersReducedMotion === prefersReducedMotion.prefersReducedMotion) {
      return false;
    } else {
      obj = {};
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
let result = require("_defineProperties").fileFinishedImporting("modules/a11y/AccessibilityStore.tsx");

export default tmp4;
export const AccessibilityContrastMode = obj;
export const ExpressionPickerFormat = obj;
