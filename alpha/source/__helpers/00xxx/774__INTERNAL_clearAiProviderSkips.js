// Module ID: 774
// Function ID: 775
// Name: _INTERNAL_clearAiProviderSkips
// Dependencies: [699, 700]
// Exports: _INTERNAL_clearAiProviderSkips, _INTERNAL_shouldSkipAiProviderWrapping, _INTERNAL_skipAiProviderWrapping

// Module 774 (_INTERNAL_clearAiProviderSkips)
import _mod699 from "module_699" /* 699 */;

let tmp2;
const CONSOLE_LEVELS = tmp2(700);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const set = new Set();

export const _INTERNAL_clearAiProviderSkips = function _INTERNAL_clearAiProviderSkips() {
  set.clear();
  if (_mod699.DEBUG_BUILD) {
    const debug = CONSOLE_LEVELS.debug;
    debug.log("Cleared AI provider skip registrations");
  }
};
export const _INTERNAL_shouldSkipAiProviderWrapping = function _INTERNAL_shouldSkipAiProviderWrapping(arg0) {
  return set.has(arg0);
};
export const _INTERNAL_skipAiProviderWrapping = function _INTERNAL_skipAiProviderWrapping(arr) {
  const item = arr.forEach((item) => {
    set.add(item);
    const tmp2 = require;
    const tmp3 = dependencyMap;
    if (_mod699.DEBUG_BUILD) {
      const debug = tmp2(tmp3[1]).debug;
      const _HermesInternal = HermesInternal;
      debug.log("AI provider \"" + item + "\" wrapping will be skipped");
    }
  });
};
