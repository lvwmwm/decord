// Module ID: 6941
// Function ID: 6942
// Dependencies: [19, 6926]
// Exports: useViewRefHandler

// Module 6941
import _mod19 from "module_19" /* 19 */;
import _modDef6926 from "module_6926" /* 6926 */;

_mod19.useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        tmp.previousViewTag = _modDef6926(tmp.viewRef);
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
};
