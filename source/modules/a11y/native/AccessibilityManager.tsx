// Module ID: 13367
// Function ID: 102695
// Dependencies: [5, 27, 4122, 653, 1281, 13368, 686, 675, 13371, 10019, 13369, 3972, 3976, 2]

// Module 13367
import toggleFeature from "toggleFeature";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { SystemTheme } from "SystemThemeState";

let closure_4;
let closure_5;
const require = arg1;
({ AccessibilityInfo: closure_4, Appearance: closure_5 } = get_ActivityIndicator);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/a11y/native/AccessibilityManager.tsx");

export default {
  init() {
    const self = this;
    importDefault(13368).init();
    this.updateNativeColors();
    this.updateMotionSettings();
    _isNativeReflectConstruct.addChangeListener(this.updateNativeColors);
    _isNativeReflectConstruct.addChangeListener(this.updateMotionSettings);
    let obj = importDefault(13368);
    const subscription = importDefault(686).subscribe("CONNECTION_OPEN", this.updateMotionSettings);
    closure_5.addChangeListener(this.updateSystemAppearance);
    const listener = closure_4.addEventListener("screenReaderChanged", (arg0) => {
      const result = self.updateScreenReaderEnabled(arg0);
    });
    const obj2 = importDefault(686);
    const subscription1 = importDefault(686).subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", () => {
      let obj = outer1_1(outer1_2[7]);
      obj = { colorblind_enabled: outer1_6.colorblindMode };
      obj.track(outer1_7.LOCAL_SETTINGS_UPDATED, obj);
    });
    let result = this.startAnnouncementQueue();
  },
  updateNativeColors() {
    require(13371) /* updateSaturation */.updateSaturation(_isNativeReflectConstruct.saturation);
  },
  updateMotionSettings() {
    importDefault(10019)(require(13369) /* A11Y_FEATURE_MAP */.accessibilityPreferencesSharedValue, { reduceMotion: _isNativeReflectConstruct.useReducedMotion, prefersCrossfades: _isNativeReflectConstruct.systemPrefersCrossfades });
  },
  checkScreenreaderEnabled() {
    const self = this;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  updateScreenReaderEnabled(screenReaderEnabled) {
    importDefault(10019)(require(13369) /* A11Y_FEATURE_MAP */.accessibilityPreferencesSharedValue, { screenReaderEnabled });
  },
  updateSystemAppearance(colorScheme) {
    let DARK = SystemTheme.NO_PREFERENCE;
    colorScheme = colorScheme.colorScheme;
    if ("light" === colorScheme) {
      DARK = SystemTheme.LIGHT;
    } else if ("dark" === colorScheme) {
      DARK = SystemTheme.DARK;
    }
    require(3972) /* setSystemTheme */.setSystemTheme(DARK);
  },
  startAnnouncementQueue() {
    const set = new Set();
    const listener = closure_4.addEventListener("announcementFinished", (success) => {
      if (!success.success) {
        if (!set.has(success.announcement)) {
          set.add(success.announcement);
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            const AccessibilityAnnouncer = set(outer2_2[12]).AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(success.announcement);
          }, 150);
        }
      }
      success.delete(success.announcement);
    });
  }
};
