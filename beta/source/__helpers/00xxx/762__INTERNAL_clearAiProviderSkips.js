// Module ID: 762
// Function ID: 763
// Name: _INTERNAL_clearAiProviderSkips
// Dependencies: [687, 688]
// Exports: _INTERNAL_clearAiProviderSkips, _INTERNAL_shouldSkipAiProviderWrapping, _INTERNAL_skipAiProviderWrapping

// Module 762 (_INTERNAL_clearAiProviderSkips)
import _mod687 from "module_687" /* 687 */;

let tmp2;
const CONSOLE_LEVELS = tmp2(688);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const set = new Set();

export function _INTERNAL_clearAiProviderSkips() {
  set.clear();
  if (_mod687.DEBUG_BUILD) {
    const debug = CONSOLE_LEVELS.debug;
    debug.log("Cleared AI provider skip registrations");
  }
}
export function _INTERNAL_shouldSkipAiProviderWrapping(arg0) {
  return set.has(arg0);
}
export function _INTERNAL_skipAiProviderWrapping(arr) {
  const item = arr.forEach((item) => {
    set.add(item);
    const tmp2 = require;
    const tmp3 = dependencyMap;
    if (_mod687.DEBUG_BUILD) {
      const debug = tmp2(tmp3[1]).debug;
      const _HermesInternal = HermesInternal;
      debug.log("AI provider \"" + item + "\" wrapping will be skipped");
    }
  });
}
