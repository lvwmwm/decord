// Module ID: 6949
// Function ID: 6950
// Dependencies: [19, 6934]
// Exports: useViewRefHandler

// Module 6949
import _mod19 from "module_19" /* 19 */;
import _modDef6934 from "module_6934" /* 6934 */;

_mod19.useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        tmp.previousViewTag = _modDef6934(tmp.viewRef);
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
};
