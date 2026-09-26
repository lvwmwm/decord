// Module ID: 6979
// Function ID: 6980
// Dependencies: [19, 6964]
// Exports: useViewRefHandler

// Module 6979
import _mod19 from "module_19" /* 19 */;
import _modDef6964 from "module_6964" /* 6964 */;

_mod19.useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        tmp.previousViewTag = _modDef6964(tmp.viewRef);
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
};
