// Module ID: 6487
// Function ID: 6488
// Name: supportsHistory
// Dependencies: [6366]

// Module 6487 (supportsHistory)
const require = arg1;
const dependencyMap = arg6;
arg5.supportsHistory = function supportsHistory() {
  const chrome = require(6366) /* getGlobalSingleton */.GLOBAL_OBJ.chrome;
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
