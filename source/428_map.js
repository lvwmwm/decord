// Module ID: 428
// Function ID: 5955
// Name: map
// Dependencies: []

// Module 428 (map)
const items = [[true, true], [], [], [], [true, true], [], []];
const map = new Map(items);
arg5.default = {
  isBoldTextEnabled() {
    return Promise.resolve(false);
  },
  isGrayscaleEnabled(arg0) {
    return new Promise((arg0, arg1) => {
      let isGrayscaleEnabled;
      if (null != callback(closure_2[0])) {
        isGrayscaleEnabled = callback(closure_2[0]).isGrayscaleEnabled;
      }
      if (null != isGrayscaleEnabled) {
        callback(closure_2[0]).isGrayscaleEnabled(arg0);
        const obj = callback(closure_2[0]);
      } else {
        arg1(null);
      }
    });
  },
  isInvertColorsEnabled(arg0) {
    return new Promise((arg0, arg1) => {
      let prop;
      if (null != callback(closure_2[0])) {
        prop = callback(closure_2[0]).isInvertColorsEnabled;
      }
      if (null != prop) {
        const result = callback(closure_2[0]).isInvertColorsEnabled(arg0);
        const obj = callback(closure_2[0]);
      } else {
        arg1(null);
      }
    });
  },
  isReduceMotionEnabled(arg0) {
    return new Promise((arg0, arg1) => {
      if (null != callback(closure_2[0])) {
        const result = callback(closure_2[0]).isReduceMotionEnabled(arg0);
        const obj = callback(closure_2[0]);
      } else {
        arg1(null);
      }
    });
  },
  isHighTextContrastEnabled(arg0) {
    return new Promise((arg0, arg1) => {
      let prop;
      if (null != callback(closure_2[0])) {
        prop = callback(closure_2[0]).isHighTextContrastEnabled;
      }
      if (null != prop) {
        const result = callback(closure_2[0]).isHighTextContrastEnabled(arg0);
        const obj = callback(closure_2[0]);
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
      if (null != callback(closure_2[0])) {
        const result = callback(closure_2[0]).isTouchExplorationEnabled(arg0);
        const obj = callback(closure_2[0]);
      } else {
        arg1(null);
      }
    });
  },
  isAccessibilityServiceEnabled(arg0) {
    return new Promise((arg0, arg1) => {
      if (null != callback(closure_2[0])) {
        if (null != callback(closure_2[0]).isAccessibilityServiceEnabled) {
          const result = callback(closure_2[0]).isAccessibilityServiceEnabled(arg0);
          const obj = callback(closure_2[0]);
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
      obj = arg2(arg6[1]);
      addListenerResult = obj.addListener(value, arg1);
    }
    return addListenerResult;
  },
  setAccessibilityFocus(arg0) {
    arg2(arg6[2])(arg0, "focus");
  },
  sendAccessibilityEvent(arg0, arg1) {
    const result = arg1(arg6[3]).sendAccessibilityEvent(arg0, arg1);
  },
  announceForAccessibility(intl) {
    if (null != arg2(arg6[0])) {
      const result = arg2(arg6[0]).announceForAccessibility(intl);
      const obj = arg2(arg6[0]);
    }
  },
  announceForAccessibilityWithOptions(intl) {
    if (null != arg2(arg6[0])) {
      const result = arg2(arg6[0]).announceForAccessibility(intl);
      const obj = arg2(arg6[0]);
    }
  },
  getRecommendedTimeoutMillis(arg0, arg1) {
    arg1 = arg0;
    return new Promise((arg0, arg1) => {
      if (null != callback(closure_2[0])) {
        if (callback(closure_2[0]).getRecommendedTimeoutMillis) {
          const recommendedTimeoutMillis = callback(closure_2[0]).getRecommendedTimeoutMillis(arg0, arg0);
          const obj = callback(closure_2[0]);
        }
      }
      arg0(arg0);
    });
  }
};
