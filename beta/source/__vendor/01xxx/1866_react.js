// Module ID: 1866
// Function ID: 1867
// Name: react
// Dependencies: [19]
// Exports: default

// Module 1866 (react)
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
