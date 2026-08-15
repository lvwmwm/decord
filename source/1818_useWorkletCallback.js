// Module ID: 1818
// Function ID: 1819
// Name: useWorkletCallback
// Dependencies: [19]
// Exports: useWorkletCallback

// Module 1818 (useWorkletCallback)
require("noop").useCallback;

export const useWorkletCallback = function useWorkletCallback(fn, items) {
  if (items == null) {
    items = [];
  }
  return useCallback(fn, items);
};
