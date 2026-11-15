// Module ID: 13431
// Function ID: 13432
// Name: supportsHistory
// Dependencies: [13310]
// Exports: supportsHistory

// Module 13431 (supportsHistory)
import _mod13310 from "module_13310" /* 13310 */;


export function supportsHistory() {
  const chrome = _mod13310.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod13310.GLOBAL_OBJ && _mod13310.GLOBAL_OBJ.history.pushState && _mod13310.GLOBAL_OBJ.history.replaceState);
  return tmp5;
}
