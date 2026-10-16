// Module ID: 12426
// Function ID: 12427
// Name: supportsHistory
// Dependencies: [12305]
// Exports: supportsHistory

// Module 12426 (supportsHistory)
import _mod12305 from "module_12305" /* 12305 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod12305.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod12305.GLOBAL_OBJ && _mod12305.GLOBAL_OBJ.history.pushState && _mod12305.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
