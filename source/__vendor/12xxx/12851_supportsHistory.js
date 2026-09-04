// Module ID: 12851
// Function ID: 12852
// Name: supportsHistory
// Dependencies: [12730]

// Module 12851 (supportsHistory)
import getGlobalSingleton from "getGlobalSingleton" /* 12730 */;

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
