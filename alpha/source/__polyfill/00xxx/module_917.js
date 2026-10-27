// Module ID: 917
// Function ID: 918
// Dependencies: [913]
// Exports: getNavigationEntry

// Module 917
import _mod913 from "module_913" /* 913 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getNavigationEntry = () => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const _performance = _mod913.WINDOW.performance;
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
