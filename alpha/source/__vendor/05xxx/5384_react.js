// Module ID: 5384
// Function ID: 5385
// Name: react
// Dependencies: [19, 5369]
// Exports: useViewRefHandler

// Module 5384 (react)
import react from "react" /* 19 */;
import react_nativeDefault from "react-native" /* 5369 */;

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
