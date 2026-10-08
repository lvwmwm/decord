// Module ID: 1863
// Function ID: 1864
// Name: react
// Dependencies: [19]
// Exports: default

// Module 1863 (react)
import react from "react" /* 19 */;

const useCallback = react.useCallback;

export default function _default() {
  const items = [...arguments];
  return useCallback((current) => {
    for (const item10007 of items) {
      let tmp = item10007;
      if (tmp) {
        if (typeof tmp === "function") {
          let tmpResult = tmp(current);
        } else {
          tmp.current = current;
        }
      }
      continue;
    }
  }, items);
};
