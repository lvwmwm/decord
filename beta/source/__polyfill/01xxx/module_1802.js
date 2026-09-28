// Module ID: 1802
// Function ID: 1803
// Dependencies: [19]
// Exports: useWorkletCallback

// Module 1802
import _mod19 from "module_19" /* 19 */;

_mod19.useCallback;

export const useWorkletCallback = function useWorkletCallback(fn, items) {
  if (items == null) {
    items = [];
  }
  return useCallback(fn, items);
};
