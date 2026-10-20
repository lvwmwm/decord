// Module ID: 12545
// Function ID: 12546
// Name: supportsHistory
// Dependencies: [12424]
// Exports: supportsHistory

// Module 12545 (supportsHistory)
import _mod12424 from "module_12424" /* 12424 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod12424.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod12424.GLOBAL_OBJ && _mod12424.GLOBAL_OBJ.history.pushState && _mod12424.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
