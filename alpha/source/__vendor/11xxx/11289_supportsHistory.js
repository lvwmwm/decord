// Module ID: 11289
// Function ID: 11290
// Name: supportsHistory
// Dependencies: [11168]
// Exports: supportsHistory

// Module 11289 (supportsHistory)
import _mod11168 from "module_11168" /* 11168 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod11168.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod11168.GLOBAL_OBJ && _mod11168.GLOBAL_OBJ.history.pushState && _mod11168.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
