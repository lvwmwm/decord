// Module ID: 9919
// Function ID: 9920
// Name: supportsHistory
// Dependencies: [9798]
// Exports: supportsHistory

// Module 9919 (supportsHistory)
import _mod9798 from "module_9798" /* 9798 */;


export function supportsHistory() {
  const chrome = _mod9798.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod9798.GLOBAL_OBJ && _mod9798.GLOBAL_OBJ.history.pushState && _mod9798.GLOBAL_OBJ.history.replaceState);
  return tmp5;
}
