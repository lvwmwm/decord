// Module ID: 428
// Function ID: 5955
// Name: map
// Dependencies: [429, 101, 268, 117]

// Module 428 (map)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
const items = [["change", "touchExplorationDidChange"], ["reduceMotionChanged", "reduceMotionDidChange"], ["highTextContrastChanged", "highTextContrastDidChange"], ["screenReaderChanged", "touchExplorationDidChange"], ["accessibilityServiceChanged", "accessibilityServiceDidChange"], ["invertColorsChanged", "invertColorDidChange"], ["grayscaleChanged", "grayscaleModeDidChange"]];
const map = new Map(items);
arg5.default = {
  isBoldTextEnabled() {
    return Promise.resolve(false);
  },
  isGrayscaleEnabled(arg0) {
    return new Promise((arg0, arg1) => {
      let isGrayscaleEnabled;
      if (null != outer1_1(outer1_2[0])) {
        isGrayscaleEnabled = outer1_1(outer1_2[0]).isGrayscaleEnabled;
      }
      if (null != isGrayscaleEnabled) {
        outer1_1(outer1_2[0]).isGrayscaleEnabled(arg0);
        const obj = outer1_1(outer1_2[0]);
      } else {
        arg1(null);
      }
    });
  },
  isInvertColorsEnabled(arg0) {
    return new Promise((arg0, arg1) => {
      let prop;
      if (null != outer1_1(outer1_2[0])) {
        prop = outer1_1(outer1_2[0]).isInvertColorsEnabled;
      }
      if (null != prop) {
        const result = outer1_1(outer1_2[0]).isInvertColorsEnabled(arg0);
        const obj = outer1_1(outer1_2[0]);
      } else {
        arg1(null);
      }
    });
  },
  isReduceMotionEnabled(arg0) {
    return new Promise((arg0, arg1) => {
      if (null != outer1_1(outer1_2[0])) {
        const result = outer1_1(outer1_2[0]).isReduceMotionEnabled(arg0);
        const obj = outer1_1(outer1_2[0]);
      } else {
        arg1(null);
      }
    });
  },
  isHighTextContrastEnabled(arg0) {
    return new Promise((arg0, arg1) => {
      let prop;
      if (null != outer1_1(outer1_2[0])) {
        prop = outer1_1(outer1_2[0]).isHighTextContrastEnabled;
      }
      if (null != prop) {
        const result = outer1_1(outer1_2[0]).isHighTextContrastEnabled(arg0);
        const obj = outer1_1(outer1_2[0]);
      } else {
        arg1(null);
      }
    });
  },
  isDarkerSystemColorsEnabled() {
    return new Promise((arg0, arg1) => Promise.resolve(false));
  },
  prefersCrossFadeTransitions() {
    return new Promise((arg0, arg1) => Promise.resolve(false));
  },
  isReduceTransparencyEnabled() {
    return Promise.resolve(false);
  },
  isScreenReaderEnabled(Text, arg1, id) {
    return new Promise((arg0, arg1) => {
      if (null != outer1_1(outer1_2[0])) {
        const result = outer1_1(outer1_2[0]).isTouchExplorationEnabled(arg0);
        const obj = outer1_1(outer1_2[0]);
      } else {
        arg1(null);
      }
    });
  },
  isAccessibilityServiceEnabled(arg0) {
    return new Promise((arg0, arg1) => {
      if (null != outer1_1(outer1_2[0])) {
        if (null != outer1_1(outer1_2[0]).isAccessibilityServiceEnabled) {
          const result = outer1_1(outer1_2[0]).isAccessibilityServiceEnabled(arg0);
          const obj = outer1_1(outer1_2[0]);
        }
      }
      arg1(null);
    });
  },
  addEventListener(arg0, arg1) {
    const value = map.get(arg0);
    if (null == value) {
      let obj = {
        remove() {

          }
      };
      let addListenerResult = obj;
    } else {
      obj = module(101);
      addListenerResult = obj.addListener(value, arg1);
    }
    return addListenerResult;
  },
  setAccessibilityFocus(arg0) {
    module(268)(arg0, "focus");
  },
  sendAccessibilityEvent(arg0, arg1) {
    const result = require(117) /* renderElement */.sendAccessibilityEvent(arg0, arg1);
  },
  announceForAccessibility(intl) {
    if (null != module(429)) {
      const result = module(429).announceForAccessibility(intl);
      const obj = module(429);
    }
  },
  announceForAccessibilityWithOptions(intl) {
    if (null != module(429)) {
      const result = module(429).announceForAccessibility(intl);
      const obj = module(429);
    }
  },
  getRecommendedTimeoutMillis(closure_0, arg1) {
    return new Promise((arg0, arg1) => {
      if (null != outer1_1(outer1_2[0])) {
        if (outer1_1(outer1_2[0]).getRecommendedTimeoutMillis) {
          const recommendedTimeoutMillis = outer1_1(outer1_2[0]).getRecommendedTimeoutMillis(closure_0, arg0);
          const obj = outer1_1(outer1_2[0]);
        }
      }
      arg0(closure_0);
    });
  }
};
