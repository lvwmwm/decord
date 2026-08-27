// Module ID: 12371
// Function ID: 12372
// Name: supportsHistory
// Dependencies: [12250]

// Module 12371 (supportsHistory)
import getGlobalSingleton from "getGlobalSingleton" /* 12250 */;

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
