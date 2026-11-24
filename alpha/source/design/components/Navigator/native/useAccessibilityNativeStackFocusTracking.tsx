// Module ID: 15304
// Function ID: 15305
// Name: useAccessibilityNativeStackFocusTracking
// Dependencies: [19, 5925, 5923, 2]
// Exports: useAccessibilityNativeStackFocusTracking

// Module 15304 (useAccessibilityNativeStackFocusTracking)
import react_nativeDefault from "react-native" /* 5923 */;
import react_nativeDefault2 from "react-native" /* 5925 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/Navigator/native/useAccessibilityNativeStackFocusTracking.tsx");

export function useAccessibilityNativeStackFocusTracking() {
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
}
