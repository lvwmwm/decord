// Module ID: 1815
// Function ID: 1816
// Name: react
// Dependencies: [19]
// Exports: useWorkletCallback

// Module 1815 (react)
import react from "react" /* 19 */;

const useCallback = react.useCallback;

export function useWorkletCallback(fn, items) {
  const tmp = useCallback;
  if (items == null) {
    items = [];
  }
  return tmp(fn, items);
}
