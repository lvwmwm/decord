// Module ID: 5345
// Function ID: 5346
// Name: react
// Dependencies: [19, 5330]
// Exports: useViewRefHandler

// Module 5345 (react)
import react from "react" /* 19 */;
import react_nativeDefault from "react-native" /* 5330 */;

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
