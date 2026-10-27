// Module ID: 12703
// Function ID: 12704
// Name: supportsHistory
// Dependencies: [12582]
// Exports: supportsHistory

// Module 12703 (supportsHistory)
import _mod12582 from "module_12582" /* 12582 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod12582.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod12582.GLOBAL_OBJ && _mod12582.GLOBAL_OBJ.history.pushState && _mod12582.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
