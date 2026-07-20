// Module ID: 12954
// Function ID: 98593
// Name: useAccessibilityNativeStackFocusTracking
// Dependencies: []
// Exports: useAccessibilityNativeStackFocusTracking

// Module 12954 (useAccessibilityNativeStackFocusTracking)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("design/components/Navigator/native/useAccessibilityNativeStackFocusTracking.tsx");

export const useAccessibilityNativeStackFocusTracking = function useAccessibilityNativeStackFocusTracking() {
  return React.useMemo(() => {
    let closure_0 = false;
    return {
      transitionStart(data) {
        if (data.data.closing) {
          callback(closure_1[1])();
        } else if (callback) {
          const callback = false;
          callback(closure_1[2])();
        }
      },
      beforeRemove() {
        let closure_0 = true;
      }
    };
  }, []);
};
