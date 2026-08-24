// Module ID: 7898
// Function ID: 7899
// Name: supportsHistory
// Dependencies: [7777]

// Module 7898 (supportsHistory)
import getGlobalSingleton from "getGlobalSingleton" /* 7777 */;

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
