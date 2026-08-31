// Module ID: 1817
// Function ID: 1818
// Name: useWorkletCallback
// Dependencies: [19]
// Exports: useWorkletCallback

// Module 1817 (useWorkletCallback)
import noop from "noop" /* 19 */;

noop.useCallback;

export const useWorkletCallback = function useWorkletCallback(fn, items) {
  if (items == null) {
    items = [];
  }
  return useCallback(fn, items);
};
