// Module ID: 1746
// Function ID: 19541
// Name: useWorkletCallback
// Dependencies: [31]
// Exports: useWorkletCallback

// Module 1746 (useWorkletCallback)
require("result").useCallback;

export const useWorkletCallback = function useWorkletCallback(fn, items) {
  if (null == items) {
    items = [];
  }
  return useCallback(fn, items);
};
