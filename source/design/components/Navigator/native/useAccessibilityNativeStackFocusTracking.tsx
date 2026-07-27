// Module ID: 13148
// Function ID: 101282
// Name: useAccessibilityNativeStackFocusTracking
// Dependencies: [31, 4475, 4474, 2]
// Exports: useAccessibilityNativeStackFocusTracking

// Module 13148 (useAccessibilityNativeStackFocusTracking)
import result from "result";

const result = require("setAccessibilityFocusPrevious").fileFinishedImporting("design/components/Navigator/native/useAccessibilityNativeStackFocusTracking.tsx");

export const useAccessibilityNativeStackFocusTracking = function useAccessibilityNativeStackFocusTracking() {
  return React.useMemo(() => {
    let c0 = false;
    return {
      transitionStart(data) {
        if (data.data.closing) {
          outer2_0(outer2_1[1])();
        } else if (c0) {
          c0 = false;
          outer2_0(outer2_1[2])();
        }
      },
      beforeRemove() {
        let c0 = true;
      }
    };
  }, []);
};
