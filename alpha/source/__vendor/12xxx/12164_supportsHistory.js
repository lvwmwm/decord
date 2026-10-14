// Module ID: 12164
// Function ID: 12165
// Name: supportsHistory
// Dependencies: [12043]
// Exports: supportsHistory

// Module 12164 (supportsHistory)
import _mod12043 from "module_12043" /* 12043 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod12043.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod12043.GLOBAL_OBJ && _mod12043.GLOBAL_OBJ.history.pushState && _mod12043.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
