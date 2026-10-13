// Module ID: 12128
// Function ID: 12129
// Name: supportsHistory
// Dependencies: [12007]
// Exports: supportsHistory

// Module 12128 (supportsHistory)
import _mod12007 from "module_12007" /* 12007 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod12007.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod12007.GLOBAL_OBJ && _mod12007.GLOBAL_OBJ.history.pushState && _mod12007.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
