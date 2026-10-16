// Module ID: 12420
// Function ID: 12421
// Name: supportsHistory
// Dependencies: [12299]
// Exports: supportsHistory

// Module 12420 (supportsHistory)
import _mod12299 from "module_12299" /* 12299 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod12299.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod12299.GLOBAL_OBJ && _mod12299.GLOBAL_OBJ.history.pushState && _mod12299.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
