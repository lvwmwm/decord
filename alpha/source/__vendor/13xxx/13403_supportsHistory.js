// Module ID: 13403
// Function ID: 13404
// Name: supportsHistory
// Dependencies: [13282]
// Exports: supportsHistory

// Module 13403 (supportsHistory)
import _mod13282 from "module_13282" /* 13282 */;


export function supportsHistory() {
  const chrome = _mod13282.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod13282.GLOBAL_OBJ && _mod13282.GLOBAL_OBJ.history.pushState && _mod13282.GLOBAL_OBJ.history.replaceState);
  return tmp5;
}
