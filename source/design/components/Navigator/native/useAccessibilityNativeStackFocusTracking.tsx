// Module ID: 13536
// Function ID: 13537
// Name: useAccessibilityNativeStackFocusTracking
// Dependencies: [19, 4659, 4658, 2]
// Exports: useAccessibilityNativeStackFocusTracking

// Module 13536 (useAccessibilityNativeStackFocusTracking)
import noop from "noop";

const result = require("setAccessibilityFocusPrevious").fileFinishedImporting("design/components/Navigator/native/useAccessibilityNativeStackFocusTracking.tsx");

export const useAccessibilityNativeStackFocusTracking = function useAccessibilityNativeStackFocusTracking() {
  return React.useMemo(() => {
    let c0 = false;
    return {
      transitionStart(data) {
        if (data.data.closing) {
          callback(outer1_1[1])();
        } else if (callback) {
          callback = false;
          callback(outer1_1[2])();
        }
      },
      beforeRemove() {
        let c0 = true;
      }
    };
  }, []);
};
