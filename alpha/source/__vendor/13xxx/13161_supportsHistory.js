// Module ID: 13161
// Function ID: 13162
// Name: supportsHistory
// Dependencies: [13040]
// Exports: supportsHistory

// Module 13161 (supportsHistory)
import _mod13040 from "module_13040" /* 13040 */;


export function supportsHistory() {
  const chrome = _mod13040.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod13040.GLOBAL_OBJ && _mod13040.GLOBAL_OBJ.history.pushState && _mod13040.GLOBAL_OBJ.history.replaceState);
  return tmp5;
}
