// Module ID: 12642
// Function ID: 12643
// Name: supportsHistory
// Dependencies: [12521]
// Exports: supportsHistory

// Module 12642 (supportsHistory)
import _mod12521 from "module_12521" /* 12521 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod12521.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod12521.GLOBAL_OBJ && _mod12521.GLOBAL_OBJ.history.pushState && _mod12521.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
