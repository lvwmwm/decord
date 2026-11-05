// Module ID: 5483
// Function ID: 5484
// Dependencies: [19, 5466, 5478]
// Exports: useViewRefHandler

// Module 5483
import react from "react" /* 19 */;
import react_nativeDefault from "react-native" /* 5466 */;
import assignRef from "assignRef" /* 5478 */;

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
