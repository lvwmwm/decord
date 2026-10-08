// Module ID: 11115
// Function ID: 11116
// Name: supportsHistory
// Dependencies: [10994]
// Exports: supportsHistory

// Module 11115 (supportsHistory)
import _mod10994 from "module_10994" /* 10994 */;


export const supportsHistory = function supportsHistory() {
  const chrome = _mod10994.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod10994.GLOBAL_OBJ && _mod10994.GLOBAL_OBJ.history.pushState && _mod10994.GLOBAL_OBJ.history.replaceState);
  return tmp5;
};
