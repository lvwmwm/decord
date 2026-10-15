// Module ID: 12397
// Function ID: 12398
// Name: supportsHistory
// Dependencies: [12276]
// Exports: supportsHistory

// Module 12397 (supportsHistory)
import _mod12276 from "module_12276" /* 12276 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod12276.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod12276.GLOBAL_OBJ && _mod12276.GLOBAL_OBJ.history.pushState && _mod12276.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
