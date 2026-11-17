// Module ID: 9932
// Function ID: 9933
// Name: supportsHistory
// Dependencies: [9811]
// Exports: supportsHistory

// Module 9932 (supportsHistory)
import _mod9811 from "module_9811" /* 9811 */;


export function supportsHistory() {
  const chrome = _mod9811.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod9811.GLOBAL_OBJ && _mod9811.GLOBAL_OBJ.history.pushState && _mod9811.GLOBAL_OBJ.history.replaceState);
  return tmp5;
}
