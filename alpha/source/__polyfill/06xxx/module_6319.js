// Module ID: 6319
// Function ID: 6320
// Dependencies: [19, 6304]
// Exports: useViewRefHandler

// Module 6319
import _mod19 from "module_19" /* 19 */;
import _modDef6304 from "module_6304" /* 6304 */;

_mod19.useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        tmp.previousViewTag = _modDef6304(tmp.viewRef);
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
};
