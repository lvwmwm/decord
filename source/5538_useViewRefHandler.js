// Module ID: 5538
// Function ID: 5539
// Name: useViewRefHandler
// Dependencies: [19, 5523]
// Exports: useViewRefHandler

// Module 5538 (useViewRefHandler)
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
