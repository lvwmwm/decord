// Module ID: 9852
// Function ID: 9853
// Name: supportsHistory
// Dependencies: [9731]
// Exports: supportsHistory

// Module 9852 (supportsHistory)
import _mod9731 from "module_9731" /* 9731 */;


export function supportsHistory() {
  const chrome = _mod9731.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod9731.GLOBAL_OBJ && _mod9731.GLOBAL_OBJ.history.pushState && _mod9731.GLOBAL_OBJ.history.replaceState);
  return tmp5;
}
