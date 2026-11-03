// Module ID: 13312
// Function ID: 13313
// Name: supportsHistory
// Dependencies: [13191]
// Exports: supportsHistory

// Module 13312 (supportsHistory)
import _mod13191 from "module_13191" /* 13191 */;


export function supportsHistory() {
  const chrome = _mod13191.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod13191.GLOBAL_OBJ && _mod13191.GLOBAL_OBJ.history.pushState && _mod13191.GLOBAL_OBJ.history.replaceState);
  return tmp5;
}
