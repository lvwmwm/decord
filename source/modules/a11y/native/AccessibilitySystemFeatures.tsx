// Module ID: 13245
// Function ID: 100498
// Name: toggleFeature
// Dependencies: []

// Module 13245 (toggleFeature)
function toggleFeature(PREFERS_COLOR_SCHEME_DARK, useReducedMotion) {
  if (useReducedMotion) {
    let closure_8 = tmp | PREFERS_COLOR_SCHEME_DARK;
  } else {
    closure_8 = tmp & ~PREFERS_COLOR_SCHEME_DARK;
  }
  const tmp2 = require(dependencyMap[3]).A11Y_FEATURE_MAP[PREFERS_COLOR_SCHEME_DARK];
  if (null != tmp2) {
    const obj = {};
    obj[tmp2] = useReducedMotion;
    importDefault(dependencyMap[4])(require(dependencyMap[3]).accessibilityPreferencesSharedValue, obj);
    const tmp5 = importDefault(dependencyMap[4]);
  }
}
const _module = require(dependencyMap[0]);
({ AccessibilityInfo: closure_3, Appearance: closure_4, AppState: closure_5 } = _module);
let closure_6 = importDefault(dependencyMap[1]);
const AccessibilityFeatureFlags = require(dependencyMap[2]).AccessibilityFeatureFlags;
const NONE = AccessibilityFeatureFlags.NONE;
const _module1 = require(dependencyMap[7]);
const result = _module1.fileFinishedImporting("modules/a11y/native/AccessibilitySystemFeatures.tsx");

export default {
  init() {
    closure_6.addChangeListener(this.handleAccessibilityStoreChanged);
    const listener = closure_3.addEventListener("reduceMotionChanged", this.handleReduceMotionChanged);
    const result = closure_3.isReduceMotionEnabled();
    result.then(this.handleReduceMotionChanged);
    const listener1 = closure_3.addEventListener("reduceTransparencyChanged", this.handleReduceTransparencyChanged);
    const result1 = closure_3.isReduceTransparencyEnabled();
    result1.then(this.handleReduceTransparencyChanged);
    const listener2 = closure_3.addEventListener("boldTextChanged", this.handleBoldTextChanged);
    closure_3.isBoldTextEnabled().then(this.handleBoldTextChanged);
    const listener3 = closure_3.addEventListener("grayscaleChanged", this.handleGrayscaleChanged);
    const isBoldTextEnabledResult = closure_3.isBoldTextEnabled();
    closure_3.isGrayscaleEnabled().then(this.handleGrayscaleChanged);
    const listener4 = closure_3.addEventListener("invertColorsChanged", this.handleInvertColorsChanged);
    const result2 = closure_3.isInvertColorsEnabled();
    result2.then(this.handleInvertColorsChanged);
    const isGrayscaleEnabledResult = closure_3.isGrayscaleEnabled();
    const result3 = this.handlePreferredColorSchemeChanged({ colorScheme: closure_4.getColorScheme() });
    closure_4.addChangeListener(this.handlePreferredColorSchemeChanged);
    const listener5 = closure_5.addEventListener("change", this.handleAppStateChange);
    const obj = { colorScheme: closure_4.getColorScheme() };
    const result4 = importDefault(dependencyMap[5]).setSystemAccessibilityFeatures(this.getActiveFeatures);
  },
  getActiveFeatures() {
    return NONE;
  },
  handleReduceMotionChanged(arg0) {
    let str = "no-preference";
    if (arg0) {
      str = "reduce";
    }
    const result = require(dependencyMap[6]).systemPrefersReducedMotionChanged(str);
    toggleFeature(AccessibilityFeatureFlags.REDUCED_MOTION, closure_6.useReducedMotion);
  },
  handleReduceTransparencyChanged(useReducedMotion) {
    toggleFeature(AccessibilityFeatureFlags.REDUCED_TRANSPARENCY, useReducedMotion);
  },
  handleBoldTextChanged(useReducedMotion) {
    toggleFeature(AccessibilityFeatureFlags.BOLD_TEXT, useReducedMotion);
  },
  handleGrayscaleChanged(useReducedMotion) {
    toggleFeature(AccessibilityFeatureFlags.GRAYSCALE, useReducedMotion);
  },
  handleInvertColorsChanged(useReducedMotion) {
    toggleFeature(AccessibilityFeatureFlags.INVERT_COLORS, useReducedMotion);
  },
  handlePreferredColorSchemeChanged(colorScheme) {
    colorScheme = colorScheme.colorScheme;
    if ("dark" === colorScheme) {
      toggleFeature(AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_LIGHT, false);
      toggleFeature(AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_DARK, true);
    } else if ("light" === colorScheme) {
      toggleFeature(AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_DARK, false);
      toggleFeature(AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_LIGHT, true);
    } else {
      toggleFeature(AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_DARK, false);
      toggleFeature(AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_LIGHT, false);
    }
  },
  handleAccessibilityStoreChanged() {
    toggleFeature(AccessibilityFeatureFlags.REDUCED_MOTION, closure_6.useReducedMotion);
    toggleFeature(AccessibilityFeatureFlags.REDUCED_MOTION_FROM_USER_SETTINGS, "auto" !== closure_6.rawPrefersReducedMotion);
    toggleFeature(AccessibilityFeatureFlags.SATURATION_LEVEL_DECREASED, closure_6.saturation < 1);
    toggleFeature(AccessibilityFeatureFlags.CONTRAST_LEVEL_DECREASED, closure_6.contrast < 1);
    toggleFeature(AccessibilityFeatureFlags.CONTRAST_LEVEL_INCREASED, closure_6.contrast > 1);
  },
  handleAppStateChange(arg0) {
    if ("active" === arg0) {
      const result = closure_3.isReduceMotionEnabled();
      result.then((arg0) => {
        let str = "no-preference";
        if (arg0) {
          str = "reduce";
        }
        const result = callback(closure_2[6]).systemPrefersReducedMotionChanged(str);
        callback2(constants.REDUCED_MOTION, useReducedMotion.useReducedMotion);
      });
      const result1 = closure_3.prefersCrossFadeTransitions();
      result1.then((systemPrefersCrossfades) => {
        callback2(constants.REDUCED_MOTION_PREFERS_CROSSFADES, systemPrefersCrossfades);
        const result = callback(closure_2[6]).systemPrefersCrossfadesChanged(systemPrefersCrossfades);
      });
    }
  }
};
