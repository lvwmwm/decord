// Module ID: 763
// Function ID: 764
// Name: _INTERNAL_clearAiProviderSkips
// Dependencies: [688, 689]
// Exports: _INTERNAL_clearAiProviderSkips, _INTERNAL_shouldSkipAiProviderWrapping, _INTERNAL_skipAiProviderWrapping

// Module 763 (_INTERNAL_clearAiProviderSkips)
import _mod688 from "module_688" /* 688 */;

let tmp2;
const CONSOLE_LEVELS = tmp2(689);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const set = new Set();

export const _INTERNAL_clearAiProviderSkips = function _INTERNAL_clearAiProviderSkips() {
  set.clear();
  if (_mod688.DEBUG_BUILD) {
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
    if (_mod688.DEBUG_BUILD) {
      const debug = tmp2(tmp3[1]).debug;
      const _HermesInternal = HermesInternal;
      debug.log("AI provider \"" + item + "\" wrapping will be skipped");
    }
  });
};
