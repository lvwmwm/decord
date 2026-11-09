// Module ID: 13400
// Function ID: 13401
// Name: supportsHistory
// Dependencies: [13279]
// Exports: supportsHistory

// Module 13400 (supportsHistory)
import _mod13279 from "module_13279" /* 13279 */;


export function supportsHistory() {
  const chrome = _mod13279.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod13279.GLOBAL_OBJ && _mod13279.GLOBAL_OBJ.history.pushState && _mod13279.GLOBAL_OBJ.history.replaceState);
  return tmp5;
}
