// Module ID: 7033
// Function ID: 7034
// Dependencies: [19, 7018]
// Exports: useViewRefHandler

// Module 7033
import _mod19 from "module_19" /* 19 */;
import _modDef7018 from "module_7018" /* 7018 */;

_mod19.useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        tmp.previousViewTag = _modDef7018(tmp.viewRef);
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
};
