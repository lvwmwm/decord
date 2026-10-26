// Module ID: 12701
// Function ID: 12702
// Name: supportsHistory
// Dependencies: [12580]
// Exports: supportsHistory

// Module 12701 (supportsHistory)
import _mod12580 from "module_12580" /* 12580 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod12580.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod12580.GLOBAL_OBJ && _mod12580.GLOBAL_OBJ.history.pushState && _mod12580.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
