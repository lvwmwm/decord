// Module ID: 1845
// Function ID: 1846
// Dependencies: [19]
// Exports: default

// Module 1845
import _mod19 from "module_19" /* 19 */;

_mod19.useCallback;

export default function _default() {
  const items = [...arguments];
  return useCallback((current) => {
    for (const item10007 of items) {
      let tmp = item10007;
      if (item10007) {
        if (typeof tmp === "function") {
          let tmpResult = tmp(arg0);
        } else {
          tmp.current = arg0;
        }
      }
      continue;
    }
  }, items);
};
