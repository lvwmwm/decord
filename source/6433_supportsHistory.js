// Module ID: 6433
// Function ID: 57801
// Name: supportsHistory
// Dependencies: [6312]

// Module 6433 (supportsHistory)
const require = arg1;
const dependencyMap = arg6;
arg5.supportsHistory = function supportsHistory() {
  const chrome = require(6312) /* getGlobalSingleton */.GLOBAL_OBJ.chrome;
  let runtime = chrome;
  if (chrome) {
    runtime = chrome.app;
  }
  if (runtime) {
    runtime = chrome.app.runtime;
  }
  let pushState = "history" in require(6312) /* getGlobalSingleton */.GLOBAL_OBJ;
  if (pushState) {
    pushState = require(6312) /* getGlobalSingleton */.GLOBAL_OBJ.history.pushState;
  }
  if (pushState) {
    pushState = require(6312) /* getGlobalSingleton */.GLOBAL_OBJ.history.replaceState;
  }
  return !runtime && pushState;
};
