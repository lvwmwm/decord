// Module ID: 13176
// Function ID: 13177
// Name: supportsHistory
// Dependencies: [13055]
// Exports: supportsHistory

// Module 13176 (supportsHistory)
import _mod13055 from "module_13055" /* 13055 */;


export function supportsHistory() {
  const chrome = _mod13055.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod13055.GLOBAL_OBJ && _mod13055.GLOBAL_OBJ.history.pushState && _mod13055.GLOBAL_OBJ.history.replaceState);
  return tmp5;
}
