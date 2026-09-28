// Module ID: 12435
// Function ID: 12436
// Name: supportsHistory
// Dependencies: [12314]
// Exports: supportsHistory

// Module 12435 (supportsHistory)
import _mod12314 from "module_12314" /* 12314 */;

require = arg1;
const dependencyMap = arg6;

export const supportsHistory = function supportsHistory() {
  const chrome = _mod12314.GLOBAL_OBJ.chrome;
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
