// Module ID: 5348
// Function ID: 5349
// Name: react
// Dependencies: [19, 5333]
// Exports: useViewRefHandler

// Module 5348 (react)
import react from "react" /* 19 */;
import react_nativeDefault from "react-native" /* 5333 */;

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
