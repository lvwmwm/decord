// Module ID: 1770
// Function ID: 1771
// Name: useWorkletCallback
// Dependencies: [19]
// Exports: useWorkletCallback

// Module 1770 (useWorkletCallback)
require("noop").useCallback;

export const useWorkletCallback = function useWorkletCallback(fn, items) {
  if (items == null) {
    items = [];
  }
  return useCallback(fn, items);
};
