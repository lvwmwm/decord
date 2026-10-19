// Module ID: 12508
// Function ID: 12509
// Name: supportsHistory
// Dependencies: [12387]
// Exports: supportsHistory

// Module 12508 (supportsHistory)
import _mod12387 from "module_12387" /* 12387 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod12387.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod12387.GLOBAL_OBJ && _mod12387.GLOBAL_OBJ.history.pushState && _mod12387.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
