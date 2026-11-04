// Module ID: 13396
// Function ID: 13397
// Name: supportsHistory
// Dependencies: [13275]
// Exports: supportsHistory

// Module 13396 (supportsHistory)
import _mod13275 from "module_13275" /* 13275 */;


export function supportsHistory() {
  const chrome = _mod13275.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod13275.GLOBAL_OBJ && _mod13275.GLOBAL_OBJ.history.pushState && _mod13275.GLOBAL_OBJ.history.replaceState);
  return tmp5;
}
