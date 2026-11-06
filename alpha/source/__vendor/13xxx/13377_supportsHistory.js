// Module ID: 13377
// Function ID: 13378
// Name: supportsHistory
// Dependencies: [13256]
// Exports: supportsHistory

// Module 13377 (supportsHistory)
import _mod13256 from "module_13256" /* 13256 */;


export function supportsHistory() {
  const chrome = _mod13256.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod13256.GLOBAL_OBJ && _mod13256.GLOBAL_OBJ.history.pushState && _mod13256.GLOBAL_OBJ.history.replaceState);
  return tmp5;
}
