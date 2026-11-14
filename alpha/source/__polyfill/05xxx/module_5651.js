// Module ID: 5651
// Function ID: 5652
// Dependencies: [19, 5634, 5646]
// Exports: useViewRefHandler

// Module 5651
import react from "react" /* 19 */;
import react_nativeDefault from "react-native" /* 5634 */;
import assignRef from "assignRef" /* 5646 */;

const useCallback = react.useCallback;

export function useViewRefHandler(current, detectorUpdater) {
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      current.viewRef = viewRef;
      if (-1 === current.previousViewTag) {
        const tmp4 = react_nativeDefault;
        const obj = assignRef;
        current.previousViewTag = tmp4(obj.resolveHostInstance(current.viewRef));
      }
      if (!current.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
}
