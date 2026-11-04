// Module ID: 13395
// Function ID: 13396
// Name: supportsHistory
// Dependencies: [13274]
// Exports: supportsHistory

// Module 13395 (supportsHistory)
import _mod13274 from "module_13274" /* 13274 */;


export function supportsHistory() {
  const chrome = _mod13274.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod13274.GLOBAL_OBJ && _mod13274.GLOBAL_OBJ.history.pushState && _mod13274.GLOBAL_OBJ.history.replaceState);
  return tmp5;
}
