// Module ID: 7617
// Function ID: 7618
// Name: supportsHistory
// Dependencies: [7496]

// Module 7617 (supportsHistory)
const require = arg1;
const dependencyMap = arg6;
arg5.supportsHistory = function supportsHistory() {
  const chrome = require(7496) /* getGlobalSingleton */.GLOBAL_OBJ.chrome;
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
