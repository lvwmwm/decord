// Module ID: 12711
// Function ID: 12712
// Name: supportsHistory
// Dependencies: [12590]
// Exports: supportsHistory

// Module 12711 (supportsHistory)
import _mod12590 from "module_12590" /* 12590 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod12590.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod12590.GLOBAL_OBJ && _mod12590.GLOBAL_OBJ.history.pushState && _mod12590.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
