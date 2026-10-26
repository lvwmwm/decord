// Module ID: 5347
// Function ID: 5348
// Name: react
// Dependencies: [19, 5332]
// Exports: useViewRefHandler

// Module 5347 (react)
import react from "react" /* 19 */;
import react_nativeDefault from "react-native" /* 5332 */;

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
