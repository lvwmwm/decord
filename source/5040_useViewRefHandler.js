// Module ID: 5040
// Function ID: 42992
// Name: useViewRefHandler
// Dependencies: []
// Exports: useViewRefHandler

// Module 5040 (useViewRefHandler)
require(dependencyMap[0]).useCallback;

export const useViewRefHandler = function useViewRefHandler(current, detectorUpdater) {
  const importDefault = current;
  const dependencyMap = detectorUpdater;
  const items = [current, detectorUpdater];
  return useCallback((viewRef) => {
    if (null !== viewRef) {
      viewRef.viewRef = viewRef;
      if (-1 === viewRef.previousViewTag) {
        viewRef.previousViewTag = viewRef(arg1[1])(viewRef.viewRef);
      }
      if (!viewRef.firstRender) {
        arg1(true);
      }
    }
  }, items);
};
