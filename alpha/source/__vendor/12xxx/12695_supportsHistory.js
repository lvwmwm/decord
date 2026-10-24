// Module ID: 12695
// Function ID: 12696
// Name: supportsHistory
// Dependencies: [12574]
// Exports: supportsHistory

// Module 12695 (supportsHistory)
import _mod12574 from "module_12574" /* 12574 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod12574.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod12574.GLOBAL_OBJ && _mod12574.GLOBAL_OBJ.history.pushState && _mod12574.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
