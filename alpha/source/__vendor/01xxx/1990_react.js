// Module ID: 1990
// Function ID: 1991
// Name: react
// Dependencies: [19]
// Exports: default

// Module 1990 (react)
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
