// Module ID: 13171
// Function ID: 13172
// Name: supportsHistory
// Dependencies: [13050]
// Exports: supportsHistory

// Module 13171 (supportsHistory)
import _mod13050 from "module_13050" /* 13050 */;

require = arg1;
const dependencyMap = arg6;

export const supportsHistory = function supportsHistory() {
  const chrome = _mod13050.GLOBAL_OBJ.chrome;
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
