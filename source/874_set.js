// Module ID: 874
// Function ID: 9734
// Name: set
// Dependencies: [800, 801]

// Module 874 (set)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const set = new Set();
arg5._INTERNAL_clearAiProviderSkips = function _INTERNAL_clearAiProviderSkips() {
  set.clear();
  if (require(800).DEBUG_BUILD) {
    const debug = require(801) /* consoleSandbox */.debug;
    debug.log("Cleared AI provider skip registrations");
  }
};
arg5._INTERNAL_shouldSkipAiProviderWrapping = function _INTERNAL_shouldSkipAiProviderWrapping(arg0) {
  return set.has(arg0);
};
arg5._INTERNAL_skipAiProviderWrapping = function _INTERNAL_skipAiProviderWrapping(arr) {
  const item = arr.forEach((arg0) => {
    outer1_2.add(arg0);
    if (outer1_0(outer1_1[0]).DEBUG_BUILD) {
      const debug = outer1_0(outer1_1[1]).debug;
      const _HermesInternal = HermesInternal;
      debug.log("AI provider \"" + arg0 + "\" wrapping will be skipped");
    }
  });
};
