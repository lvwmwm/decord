// Module ID: 7035
// Function ID: 7036
// Dependencies: [19, 7020]
// Exports: useViewRefHandler

// Module 7035
import _mod19 from "module_19" /* 19 */;
import _modDef7020 from "module_7020" /* 7020 */;

_mod19.useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        tmp.previousViewTag = _modDef7020(tmp.viewRef);
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
};
