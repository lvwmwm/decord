// Module ID: 6662
// Function ID: 6663
// Name: react
// Dependencies: [19, 6647]
// Exports: useViewRefHandler

// Module 6662 (react)
import react from "react" /* 19 */;
import react_nativeDefault from "react-native" /* 6647 */;

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
