// Module ID: 1019
// Function ID: 11065
// Name: getNavigationEntry
// Dependencies: [1015]

// Module 1019 (getNavigationEntry)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getNavigationEntry = function getNavigationEntry(arg0) {
  const tmp = arguments.length > 0 && undefined !== arguments[0];
  let first = !tmp;
  if (tmp) {
    first = arguments[0];
  }
  const _performance = require(1015) /* WINDOW */.WINDOW.performance;
  let first1;
  if (null != _performance) {
    if (null != _performance.getEntriesByType) {
      first1 = _performance.getEntriesByType("navigation")[0];
    }
  }
  if (first) {
    if (first1) {
      if (first1.responseStart > 0) {
        const _performance2 = performance;
      }
    }
  }
  return first1;
};
