// Module ID: 12433
// Function ID: 12434
// Name: supportsHistory
// Dependencies: [12312]
// Exports: supportsHistory

// Module 12433 (supportsHistory)
import _mod12312 from "module_12312" /* 12312 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod12312.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod12312.GLOBAL_OBJ && _mod12312.GLOBAL_OBJ.history.pushState && _mod12312.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
