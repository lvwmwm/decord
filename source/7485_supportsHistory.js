// Module ID: 7485
// Function ID: 7486
// Name: supportsHistory
// Dependencies: [7364]

// Module 7485 (supportsHistory)
const require = arg1;
const dependencyMap = arg6;
arg5.supportsHistory = function supportsHistory() {
  const chrome = require(7364) /* getGlobalSingleton */.GLOBAL_OBJ.chrome;
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
