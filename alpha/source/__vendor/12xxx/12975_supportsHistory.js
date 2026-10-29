// Module ID: 12975
// Function ID: 12976
// Name: supportsHistory
// Dependencies: [12854]
// Exports: supportsHistory

// Module 12975 (supportsHistory)
import _mod12854 from "module_12854" /* 12854 */;


export function supportsHistory() {
  const chrome = _mod12854.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod12854.GLOBAL_OBJ && _mod12854.GLOBAL_OBJ.history.pushState && _mod12854.GLOBAL_OBJ.history.replaceState);
  return tmp5;
}
