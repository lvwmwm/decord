// Module ID: 12491
// Function ID: 12492
// Name: supportsHistory
// Dependencies: [12370]
// Exports: supportsHistory

// Module 12491 (supportsHistory)
import _mod12370 from "module_12370" /* 12370 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod12370.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod12370.GLOBAL_OBJ && _mod12370.GLOBAL_OBJ.history.pushState && _mod12370.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
