// Module ID: 5297
// Function ID: 45515
// Name: useViewRefHandler
// Dependencies: [31, 5277]
// Exports: useViewRefHandler

// Module 5297 (useViewRefHandler)
require("result").useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
  let closure_0 = current;
  let closure_1 = detectorUpdater;
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      current.viewRef = viewRef;
      if (-1 === current.previousViewTag) {
        current.previousViewTag = current(detectorUpdater[1])(current.viewRef);
      }
      if (!current.firstRender) {
        detectorUpdater(true);
      }
    }
  }, items);
};
