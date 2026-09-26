// Module ID: 14483
// Function ID: 14484
// Name: useAccessibilityNativeStackFocusTracking
// Dependencies: [19, 5145, 5143, 2]
// Exports: useAccessibilityNativeStackFocusTracking

// Module 14483 (useAccessibilityNativeStackFocusTracking)
import setAccessibilityFocusPreviousDefault from "setAccessibilityFocusPrevious" /* 5143 */;
import markAccessibilityFocusDefault from "markAccessibilityFocus" /* 5145 */;
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
