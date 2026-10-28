// Module ID: 12758
// Function ID: 12759
// Name: supportsHistory
// Dependencies: [12637]
// Exports: supportsHistory

// Module 12758 (supportsHistory)
import _mod12637 from "module_12637" /* 12637 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod12637.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod12637.GLOBAL_OBJ && _mod12637.GLOBAL_OBJ.history.pushState && _mod12637.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
