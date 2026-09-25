// Module ID: 6118
// Function ID: 6119
// Dependencies: [19, 6103]
// Exports: useViewRefHandler

// Module 6118
import _mod19 from "module_19" /* 19 */;
import _modDef6103 from "module_6103" /* 6103 */;

_mod19.useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        tmp.previousViewTag = _modDef6103(tmp.viewRef);
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
};
