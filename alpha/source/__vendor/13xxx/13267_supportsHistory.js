// Module ID: 13267
// Function ID: 13268
// Name: supportsHistory
// Dependencies: [13146]
// Exports: supportsHistory

// Module 13267 (supportsHistory)
import _mod13146 from "module_13146" /* 13146 */;

require = arg1;
const dependencyMap = arg6;

export const supportsHistory = function supportsHistory() {
  const chrome = _mod13146.GLOBAL_OBJ.chrome;
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
