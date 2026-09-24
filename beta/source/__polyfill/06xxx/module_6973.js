// Module ID: 6973
// Function ID: 6974
// Dependencies: [19, 6958]
// Exports: useViewRefHandler

// Module 6973
import _mod19 from "module_19" /* 19 */;
import _modDef6958 from "module_6958" /* 6958 */;

_mod19.useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        tmp.previousViewTag = _modDef6958(tmp.viewRef);
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
};
