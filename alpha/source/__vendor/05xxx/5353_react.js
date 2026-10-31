// Module ID: 5353
// Function ID: 5354
// Name: react
// Dependencies: [19, 5338]
// Exports: useViewRefHandler

// Module 5353 (react)
import react from "react" /* 19 */;
import react_nativeDefault from "react-native" /* 5338 */;

const useCallback = react.useCallback;

export function useViewRefHandler(current, detectorUpdater) {
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      current.viewRef = viewRef;
      if (-1 === current.previousViewTag) {
        current.previousViewTag = react_nativeDefault(current.viewRef);
      }
      if (!current.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
}
