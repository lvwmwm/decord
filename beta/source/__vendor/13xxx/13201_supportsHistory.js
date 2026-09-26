// Module ID: 13201
// Function ID: 13202
// Name: supportsHistory
// Dependencies: [13080]
// Exports: supportsHistory

// Module 13201 (supportsHistory)
import _mod13080 from "module_13080" /* 13080 */;

require = arg1;
const dependencyMap = arg6;

export const supportsHistory = function supportsHistory() {
  const chrome = _mod13080.GLOBAL_OBJ.chrome;
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
