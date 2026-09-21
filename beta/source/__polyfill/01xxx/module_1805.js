// Module ID: 1805
// Function ID: 1806
// Dependencies: [19]
// Exports: useWorkletCallback

// Module 1805
import _mod19 from "module_19" /* 19 */;

_mod19.useCallback;

export const useWorkletCallback = function useWorkletCallback(fn, items) {
  if (items == null) {
    items = [];
  }
  return useCallback(fn, items);
};
