// Module ID: 1798
// Function ID: 1799
// Name: useWorkletCallback
// Dependencies: [19]
// Exports: useWorkletCallback

// Module 1798 (useWorkletCallback)
require("noop").useCallback;

export const useWorkletCallback = function useWorkletCallback(fn, items) {
  if (items == null) {
    items = [];
  }
  return useCallback(fn, items);
};
