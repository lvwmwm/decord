// Module ID: 15552
// Function ID: 15553
// Name: useAccessibilityNativeStackFocusTracking
// Dependencies: [19, 5949, 5947, 2]
// Exports: useAccessibilityNativeStackFocusTracking

// Module 15552 (useAccessibilityNativeStackFocusTracking)
import react_nativeDefault from "react-native" /* 5947 */;
import react_nativeDefault2 from "react-native" /* 5949 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/Navigator/native/useAccessibilityNativeStackFocusTracking.tsx");

export const useAccessibilityNativeStackFocusTracking = function useAccessibilityNativeStackFocusTracking() {
  return react.useMemo(() => {
    let c0 = false;
    return {
      transitionStart(data) {
        if (data.data.closing) {
          react_nativeDefault2();
        } else {
          const tmp = c0;
          if (tmp) {
            c0 = false;
            react_nativeDefault();
          }
        }
      },
      beforeRemove() {
        c0 = true;
      }
    };
  }, []);
};
