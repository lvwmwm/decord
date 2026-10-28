// Module ID: 5383
// Function ID: 5384
// Name: react
// Dependencies: [19, 5368]
// Exports: useViewRefHandler

// Module 5383 (react)
import react from "react" /* 19 */;
import react_nativeDefault from "react-native" /* 5368 */;

const useCallback = react.useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
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
};
