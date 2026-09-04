// Module ID: 14086
// Function ID: 14087
// Name: useAccessibilityNativeStackFocusTracking
// Dependencies: [19, 4870, 4868, 2]
// Exports: useAccessibilityNativeStackFocusTracking

// Module 14086 (useAccessibilityNativeStackFocusTracking)
import closure_2 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("design/components/Navigator/native/useAccessibilityNativeStackFocusTracking.tsx");

export const useAccessibilityNativeStackFocusTracking = function useAccessibilityNativeStackFocusTracking() {
  return React.useMemo(() => {
    c0 = false;
    return {
      transitionStart(data) {
        if (data.data.closing) {
          callback(closure_1_1[1])();
        } else if (callback) {
          callback = false;
          callback(closure_1_1[2])();
        }
      },
      beforeRemove() {
        c0 = true;
      }
    };
  }, []);
};
