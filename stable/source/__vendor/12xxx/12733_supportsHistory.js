// Module ID: 12733
// Function ID: 12734
// Name: supportsHistory
// Dependencies: [12612]
// Exports: supportsHistory

// Module 12733 (supportsHistory)
import _mod12612 from "module_12612" /* 12612 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod12612.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod12612.GLOBAL_OBJ && _mod12612.GLOBAL_OBJ.history.pushState && _mod12612.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
