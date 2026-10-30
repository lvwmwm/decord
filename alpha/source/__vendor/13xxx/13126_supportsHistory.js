// Module ID: 13126
// Function ID: 13127
// Name: supportsHistory
// Dependencies: [13005]
// Exports: supportsHistory

// Module 13126 (supportsHistory)
import _mod13005 from "module_13005" /* 13005 */;


export function supportsHistory() {
  const chrome = _mod13005.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod13005.GLOBAL_OBJ && _mod13005.GLOBAL_OBJ.history.pushState && _mod13005.GLOBAL_OBJ.history.replaceState);
  return tmp5;
}
