// Module ID: 13244
// Function ID: 100484
// Dependencies: []

// Module 13244
let closure_3 = importDefault(dependencyMap[0]);
({ AccessibilityInfo: closure_4, Appearance: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const SystemTheme = arg1(dependencyMap[4]).SystemTheme;
const obj = {
  init() {
    const arg1 = this;
    importDefault(dependencyMap[5]).init();
    this.updateNativeColors();
    this.updateMotionSettings();
    closure_6.addChangeListener(this.updateNativeColors);
    closure_6.addChangeListener(this.updateMotionSettings);
    const obj = importDefault(dependencyMap[5]);
    const subscription = importDefault(dependencyMap[6]).subscribe("CONNECTION_OPEN", this.updateMotionSettings);
    closure_5.addChangeListener(this.updateSystemAppearance);
    const listener = closure_4.addEventListener("screenReaderChanged", (arg0) => {
      const result = self.updateScreenReaderEnabled(arg0);
    });
    const obj2 = importDefault(dependencyMap[6]);
    const subscription1 = importDefault(dependencyMap[6]).subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", () => {
      let obj = callback(closure_2[7]);
      obj = { colorblind_enabled: colorblindMode.colorblindMode };
      obj.track(constants.LOCAL_SETTINGS_UPDATED, obj);
    });
    const result = this.startAnnouncementQueue();
  },
  updateNativeColors() {
    arg1(dependencyMap[8]).updateSaturation(closure_6.saturation);
  },
  updateMotionSettings() {
    importDefault(dependencyMap[9])(arg1(dependencyMap[10]).accessibilityPreferencesSharedValue, { reduceMotion: closure_6.useReducedMotion, prefersCrossfades: closure_6.systemPrefersCrossfades });
  },
  checkScreenreaderEnabled() {
    const arg1 = this;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  updateScreenReaderEnabled(screenReaderEnabled) {
    importDefault(dependencyMap[9])(arg1(dependencyMap[10]).accessibilityPreferencesSharedValue, { screenReaderEnabled });
  },
  updateSystemAppearance(colorScheme) {
    let DARK = SystemTheme.NO_PREFERENCE;
    colorScheme = colorScheme.colorScheme;
    if ("light" === colorScheme) {
      DARK = SystemTheme.LIGHT;
    } else if ("dark" === colorScheme) {
      DARK = SystemTheme.DARK;
    }
    arg1(dependencyMap[11]).setSystemTheme(DARK);
  },
  startAnnouncementQueue() {
    const arg1 = new Set();
    const listener = closure_4.addEventListener("announcementFinished", (success) => {
      if (!success.success) {
        if (!set.has(success.announcement)) {
          set.add(success.announcement);
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            const AccessibilityAnnouncer = arg0(closure_2[12]).AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(arg0.announcement);
          }, 150);
        }
      }
      success.delete(success.announcement);
    });
  }
};
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/a11y/native/AccessibilityManager.tsx");

export default obj;
