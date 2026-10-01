// Module ID: 12435
// Function ID: 12436
// Name: supportsHistory
// Dependencies: [12314]
// Exports: supportsHistory

// Module 12435 (supportsHistory)
import _mod12314 from "module_12314" /* 12314 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod12314.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod12314.GLOBAL_OBJ && _mod12314.GLOBAL_OBJ.history.pushState && _mod12314.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
