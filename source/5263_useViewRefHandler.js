// Module ID: 5263
// Function ID: 45393
// Name: useViewRefHandler
// Dependencies: [31, 5243]
// Exports: useViewRefHandler

// Module 5263 (useViewRefHandler)
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
