// Module ID: 12661
// Function ID: 12662
// Name: supportsHistory
// Dependencies: [12540]
// Exports: supportsHistory

// Module 12661 (supportsHistory)
import _mod12540 from "module_12540" /* 12540 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod12540.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod12540.GLOBAL_OBJ && _mod12540.GLOBAL_OBJ.history.pushState && _mod12540.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
