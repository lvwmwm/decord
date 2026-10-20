// Module ID: 5308
// Function ID: 5309
// Name: react
// Dependencies: [19, 5293]
// Exports: useViewRefHandler

// Module 5308 (react)
import react from "react" /* 19 */;
import react_nativeDefault from "react-native" /* 5293 */;

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
