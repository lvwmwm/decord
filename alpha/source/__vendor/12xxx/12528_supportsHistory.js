// Module ID: 12528
// Function ID: 12529
// Name: supportsHistory
// Dependencies: [12407]
// Exports: supportsHistory

// Module 12528 (supportsHistory)
import _mod12407 from "module_12407" /* 12407 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod12407.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod12407.GLOBAL_OBJ && _mod12407.GLOBAL_OBJ.history.pushState && _mod12407.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
