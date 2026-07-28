// Module ID: 6469
// Function ID: 57891
// Name: supportsHistory
// Dependencies: [6348]

// Module 6469 (supportsHistory)
const require = arg1;
const dependencyMap = arg6;
arg5.supportsHistory = function supportsHistory() {
  const chrome = require(6348) /* getGlobalSingleton */.GLOBAL_OBJ.chrome;
  let runtime = chrome;
  if (chrome) {
    runtime = chrome.app;
  }
  if (runtime) {
    runtime = chrome.app.runtime;
  }
  let pushState = "history" in require(6348) /* getGlobalSingleton */.GLOBAL_OBJ;
  if (pushState) {
    pushState = require(6348) /* getGlobalSingleton */.GLOBAL_OBJ.history.pushState;
  }
  if (pushState) {
    pushState = require(6348) /* getGlobalSingleton */.GLOBAL_OBJ.history.replaceState;
  }
  return !runtime && pushState;
};
