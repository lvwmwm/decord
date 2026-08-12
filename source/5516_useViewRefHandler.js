// Module ID: 5516
// Function ID: 5517
// Name: useViewRefHandler
// Dependencies: [19, 5501]
// Exports: useViewRefHandler

// Module 5516 (useViewRefHandler)
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
