// Module ID: 1746
// Function ID: 19540
// Name: useWorkletCallback
// Dependencies: []
// Exports: useWorkletCallback

// Module 1746 (useWorkletCallback)
require(dependencyMap[0]).useCallback;

export const useWorkletCallback = function useWorkletCallback(fn, items) {
  if (null == items) {
    items = [];
  }
  return useCallback(fn, items);
};
