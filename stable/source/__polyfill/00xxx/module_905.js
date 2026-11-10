// Module ID: 905
// Function ID: 906
// Dependencies: [901]
// Exports: getNavigationEntry

// Module 905
import _mod901 from "module_901" /* 901 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getNavigationEntry = () => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const _performance = _mod901.WINDOW.performance;
  let first;
  if (_performance != null) {
    const getEntriesByType = _performance.getEntriesByType;
    if (getEntriesByType != null) {
      first = getEntriesByType("navigation")[0];
    }
  }
  if (flag) {
    if (first) {
      if (first.responseStart > 0) {
        const _performance2 = performance;
      }
    }
  }
  return first;
};
