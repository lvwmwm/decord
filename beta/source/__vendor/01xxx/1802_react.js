// Module ID: 1802
// Function ID: 1803
// Name: react
// Dependencies: [19]
// Exports: useWorkletCallback

// Module 1802 (react)
import react from "react" /* 19 */;

const useCallback = react.useCallback;

export const useWorkletCallback = function useWorkletCallback(fn, items) {
  const tmp = useCallback;
  if (items == null) {
    items = [];
  }
  return tmp(fn, items);
};
