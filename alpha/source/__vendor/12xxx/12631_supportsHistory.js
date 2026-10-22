// Module ID: 12631
// Function ID: 12632
// Name: supportsHistory
// Dependencies: [12510]
// Exports: supportsHistory

// Module 12631 (supportsHistory)
import _mod12510 from "module_12510" /* 12510 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod12510.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod12510.GLOBAL_OBJ && _mod12510.GLOBAL_OBJ.history.pushState && _mod12510.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
