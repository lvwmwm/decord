// Module ID: 12503
// Function ID: 12504
// Name: supportsHistory
// Dependencies: [12382]
// Exports: supportsHistory

// Module 12503 (supportsHistory)
import _mod12382 from "module_12382" /* 12382 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod12382.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod12382.GLOBAL_OBJ && _mod12382.GLOBAL_OBJ.history.pushState && _mod12382.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
