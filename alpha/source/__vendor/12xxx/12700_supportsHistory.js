// Module ID: 12700
// Function ID: 12701
// Name: supportsHistory
// Dependencies: [12579]
// Exports: supportsHistory

// Module 12700 (supportsHistory)
import _mod12579 from "module_12579" /* 12579 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod12579.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod12579.GLOBAL_OBJ && _mod12579.GLOBAL_OBJ.history.pushState && _mod12579.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
