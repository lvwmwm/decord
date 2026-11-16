// Module ID: 13432
// Function ID: 13433
// Name: supportsHistory
// Dependencies: [13311]
// Exports: supportsHistory

// Module 13432 (supportsHistory)
import _mod13311 from "module_13311" /* 13311 */;


export function supportsHistory() {
  const chrome = _mod13311.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod13311.GLOBAL_OBJ && _mod13311.GLOBAL_OBJ.history.pushState && _mod13311.GLOBAL_OBJ.history.replaceState);
  return tmp5;
}
