// Module ID: 13207
// Function ID: 13208
// Name: supportsHistory
// Dependencies: [13086]
// Exports: supportsHistory

// Module 13207 (supportsHistory)
import _mod13086 from "module_13086" /* 13086 */;

require = arg1;
const dependencyMap = arg6;

export const supportsHistory = function supportsHistory() {
  const chrome = _mod13086.GLOBAL_OBJ.chrome;
  let runtime = chrome;
  if (chrome) {
    runtime = chrome.app;
  }
  if (runtime) {
    runtime = chrome.app.runtime;
  }
  let tmp4 = !runtime;
  if (!runtime) {
    tmp4 = tmp3;
  }
  return tmp4;
};
