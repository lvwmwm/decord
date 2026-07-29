// Module ID: 5319
// Function ID: 5320
// Name: useViewRefHandler
// Dependencies: [19, 5299]
// Exports: useViewRefHandler

// Module 5319 (useViewRefHandler)
require("noop").useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
  let closure_0 = current;
  let closure_1 = detectorUpdater;
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      current.viewRef = viewRef;
      if (-1 === current.previousViewTag) {
        tmp.previousViewTag = current(detectorUpdater[1])(tmp.viewRef);
      }
      if (!current.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
};
