// Module ID: 5333
// Function ID: 5334
// Name: react
// Dependencies: [19, 5318]
// Exports: useViewRefHandler

// Module 5333 (react)
import react from "react" /* 19 */;
import react_nativeDefault from "react-native" /* 5318 */;

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
