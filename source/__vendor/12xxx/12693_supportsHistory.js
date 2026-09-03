// Module ID: 12693
// Function ID: 12694
// Name: supportsHistory
// Dependencies: [12572]

// Module 12693 (supportsHistory)
import getGlobalSingleton from "getGlobalSingleton" /* 12572 */;

require = arg1;
const dependencyMap = arg6;
arg5.supportsHistory = function supportsHistory() {
  const chrome = getGlobalSingleton.GLOBAL_OBJ.chrome;
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
