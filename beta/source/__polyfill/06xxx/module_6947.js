// Module ID: 6947
// Function ID: 6948
// Dependencies: [19, 6932]
// Exports: useViewRefHandler

// Module 6947
import _mod19 from "module_19" /* 19 */;
import _modDef6932 from "module_6932" /* 6932 */;

_mod19.useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        tmp.previousViewTag = _modDef6932(tmp.viewRef);
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
};
