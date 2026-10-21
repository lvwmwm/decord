// Module ID: 12601
// Function ID: 12602
// Name: supportsHistory
// Dependencies: [12480]
// Exports: supportsHistory

// Module 12601 (supportsHistory)
import _mod12480 from "module_12480" /* 12480 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod12480.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod12480.GLOBAL_OBJ && _mod12480.GLOBAL_OBJ.history.pushState && _mod12480.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
