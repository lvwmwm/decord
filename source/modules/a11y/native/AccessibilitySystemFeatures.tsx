// Module ID: 13368
// Function ID: 102709
// Name: toggleFeature
// Dependencies: [27, 4122, 13127, 13369, 10019, 675, 13370, 2]

// Module 13368 (toggleFeature)
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AccessibilityFeatureFlags } from "AccessibilityFeatureFlags";

let closure_3;
let closure_4;
let closure_5;
function toggleFeature(PREFERS_COLOR_SCHEME_DARK, useReducedMotion) {
  if (useReducedMotion) {
    let closure_8 = tmp | PREFERS_COLOR_SCHEME_DARK;
  } else {
    closure_8 = tmp & ~PREFERS_COLOR_SCHEME_DARK;
  }
  const tmp2 = require(13369) /* A11Y_FEATURE_MAP */.A11Y_FEATURE_MAP[PREFERS_COLOR_SCHEME_DARK];
  if (null != tmp2) {
    const obj = {};
    obj[tmp2] = useReducedMotion;
    importDefault(10019)(require(13369) /* A11Y_FEATURE_MAP */.accessibilityPreferencesSharedValue, obj);
    const tmp5 = importDefault(10019);
  }
}
({ AccessibilityInfo: closure_3, Appearance: closure_4, AppState: closure_5 } = get_ActivityIndicator);
const NONE = AccessibilityFeatureFlags.NONE;
let result = require("AccessibilityFeatureFlags").fileFinishedImporting("modules/a11y/native/AccessibilitySystemFeatures.tsx");

export default {
  init() {
    _isNativeReflectConstruct.addChangeListener(this.handleAccessibilityStoreChanged);
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
    const result4 = importDefault(675).setSystemAccessibilityFeatures(this.getActiveFeatures);
  },
  getActiveFeatures() {
    return NONE;
  },
  handleReduceMotionChanged(arg0) {
    let str = "no-preference";
    if (arg0) {
      str = "reduce";
    }
    const result = require(13370) /* setFontSize */.systemPrefersReducedMotionChanged(str);
    toggleFeature(AccessibilityFeatureFlags.REDUCED_MOTION, _isNativeReflectConstruct.useReducedMotion);
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
    toggleFeature(AccessibilityFeatureFlags.REDUCED_MOTION, _isNativeReflectConstruct.useReducedMotion);
    toggleFeature(AccessibilityFeatureFlags.REDUCED_MOTION_FROM_USER_SETTINGS, "auto" !== _isNativeReflectConstruct.rawPrefersReducedMotion);
    toggleFeature(AccessibilityFeatureFlags.SATURATION_LEVEL_DECREASED, _isNativeReflectConstruct.saturation < 1);
    toggleFeature(AccessibilityFeatureFlags.CONTRAST_LEVEL_DECREASED, _isNativeReflectConstruct.contrast < 1);
    toggleFeature(AccessibilityFeatureFlags.CONTRAST_LEVEL_INCREASED, _isNativeReflectConstruct.contrast > 1);
  },
  handleAppStateChange(arg0) {
    if ("active" === arg0) {
      let result = closure_3.isReduceMotionEnabled();
      result.then((arg0) => {
        let str = "no-preference";
        if (arg0) {
          str = "reduce";
        }
        const result = outer1_0(outer1_2[6]).systemPrefersReducedMotionChanged(str);
        outer1_9(outer1_7.REDUCED_MOTION, outer1_6.useReducedMotion);
      });
      const result1 = closure_3.prefersCrossFadeTransitions();
      result1.then((systemPrefersCrossfades) => {
        outer1_9(outer1_7.REDUCED_MOTION_PREFERS_CROSSFADES, systemPrefersCrossfades);
        const result = outer1_0(outer1_2[6]).systemPrefersCrossfadesChanged(systemPrefersCrossfades);
      });
    }
  }
};
