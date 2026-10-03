// Module ID: 6190
// Function ID: 6191
// Name: react
// Dependencies: [19, 6175]
// Exports: useViewRefHandler

// Module 6190 (react)
import react from "react" /* 19 */;
import react_nativeDefault from "react-native" /* 6175 */;

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
