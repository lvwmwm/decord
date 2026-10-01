// Module ID: 6309
// Function ID: 6310
// Dependencies: [19, 6294]
// Exports: useViewRefHandler

// Module 6309
import _mod19 from "module_19" /* 19 */;
import _modDef6294 from "module_6294" /* 6294 */;

_mod19.useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        tmp.previousViewTag = _modDef6294(tmp.viewRef);
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
};
