// Module ID: 13414
// Function ID: 13415
// Name: supportsHistory
// Dependencies: [13293]
// Exports: supportsHistory

// Module 13414 (supportsHistory)
import _mod13293 from "module_13293" /* 13293 */;


export function supportsHistory() {
  const chrome = _mod13293.GLOBAL_OBJ.chrome;
  const tmp3 = chrome && chrome.app && chrome.app.runtime;
  const tmp5 = !tmp3 && ("history" in _mod13293.GLOBAL_OBJ && _mod13293.GLOBAL_OBJ.history.pushState && _mod13293.GLOBAL_OBJ.history.replaceState);
  return tmp5;
}
