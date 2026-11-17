// Module ID: 5645
// Function ID: 5646
// Dependencies: [19, 5628, 5640]
// Exports: useViewRefHandler

// Module 5645
import react from "react" /* 19 */;
import react_nativeDefault from "react-native" /* 5628 */;
import assignRef from "assignRef" /* 5640 */;

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
