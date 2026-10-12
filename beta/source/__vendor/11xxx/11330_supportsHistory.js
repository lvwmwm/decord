// Module ID: 11330
// Function ID: 11331
// Name: supportsHistory
// Dependencies: [11209]
// Exports: supportsHistory

// Module 11330 (supportsHistory)
import _mod11209 from "module_11209" /* 11209 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod11209.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod11209.GLOBAL_OBJ && _mod11209.GLOBAL_OBJ.history.pushState && _mod11209.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
