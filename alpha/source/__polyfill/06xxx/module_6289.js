// Module ID: 6289
// Function ID: 6290
// Dependencies: [19, 6274]
// Exports: useViewRefHandler

// Module 6289
import _mod19 from "module_19" /* 19 */;
import _modDef6274 from "module_6274" /* 6274 */;

_mod19.useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        tmp.previousViewTag = _modDef6274(tmp.viewRef);
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
};
