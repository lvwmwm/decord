// Module ID: 9853
// Function ID: 9854
// Name: supportsHistory
// Dependencies: [9732]
// Exports: supportsHistory

// Module 9853 (supportsHistory)
import _mod9732 from "module_9732" /* 9732 */;


export function supportsHistory() {
  const chrome = _mod9732.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod9732.GLOBAL_OBJ && _mod9732.GLOBAL_OBJ.history.pushState && _mod9732.GLOBAL_OBJ.history.replaceState);
  return tmp5;
}
