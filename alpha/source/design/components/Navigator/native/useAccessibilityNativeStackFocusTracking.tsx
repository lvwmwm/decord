// Module ID: 14191
// Function ID: 14192
// Name: useAccessibilityNativeStackFocusTracking
// Dependencies: [19, 5404, 5402, 2]
// Exports: useAccessibilityNativeStackFocusTracking

// Module 14191 (useAccessibilityNativeStackFocusTracking)
import setAccessibilityFocusPreviousDefault from "setAccessibilityFocusPrevious" /* 5402 */;
import markAccessibilityFocusDefault from "markAccessibilityFocus" /* 5404 */;
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
