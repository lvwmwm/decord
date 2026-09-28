// Module ID: 6123
// Function ID: 6124
// Dependencies: [19, 6108]
// Exports: useViewRefHandler

// Module 6123
import _mod19 from "module_19" /* 19 */;
import _modDef6108 from "module_6108" /* 6108 */;

_mod19.useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
  const previousViewTag = current;
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      previousViewTag.viewRef = viewRef;
      if (-1 === previousViewTag.previousViewTag) {
        tmp.previousViewTag = _modDef6108(tmp.viewRef);
      }
      if (!previousViewTag.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
};
