// Module ID: 11332
// Function ID: 11333
// Name: supportsHistory
// Dependencies: [11211]
// Exports: supportsHistory

// Module 11332 (supportsHistory)
import _mod11211 from "module_11211" /* 11211 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod11211.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod11211.GLOBAL_OBJ && _mod11211.GLOBAL_OBJ.history.pushState && _mod11211.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
