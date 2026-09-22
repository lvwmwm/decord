// Module ID: 13052
// Function ID: 13053
// Name: supportsHistory
// Dependencies: [12931]
// Exports: supportsHistory

// Module 13052 (supportsHistory)
import _mod12931 from "module_12931" /* 12931 */;

require = arg1;
const dependencyMap = arg6;

export const supportsHistory = function supportsHistory() {
  const chrome = _mod12931.GLOBAL_OBJ.chrome;
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
