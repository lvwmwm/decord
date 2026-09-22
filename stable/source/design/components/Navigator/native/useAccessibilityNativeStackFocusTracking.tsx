// Module ID: 14261
// Function ID: 14262
// Name: useAccessibilityNativeStackFocusTracking
// Dependencies: [19, 4985, 4983, 2]
// Exports: useAccessibilityNativeStackFocusTracking

// Module 14261 (useAccessibilityNativeStackFocusTracking)
import setAccessibilityFocusPreviousDefault from "setAccessibilityFocusPrevious" /* 4983 */;
import markAccessibilityFocusDefault from "markAccessibilityFocus" /* 4985 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/useAccessibilityNativeStackFocusTracking.tsx");

export const useAccessibilityNativeStackFocusTracking = function useAccessibilityNativeStackFocusTracking() {
  return noop.useMemo(() => {
    c0 = false;
    return {
      transitionStart(data) {
        if (data.data.closing) {
          markAccessibilityFocusDefault();
        } else if (c0) {
          c0 = false;
          setAccessibilityFocusPreviousDefault();
        }
      },
      beforeRemove() {
        c0 = true;
      }
    };
  }, []);
};
