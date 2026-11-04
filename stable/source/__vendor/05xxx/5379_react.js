// Module ID: 5379
// Function ID: 5380
// Name: react
// Dependencies: [19, 5364]
// Exports: useViewRefHandler

// Module 5379 (react)
import react from "react" /* 19 */;
import react_nativeDefault from "react-native" /* 5364 */;

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
