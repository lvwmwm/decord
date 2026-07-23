// Module ID: 7358
// Function ID: 59320
// Name: supportsHistory
// Dependencies: [7237]

// Module 7358 (supportsHistory)
const require = arg1;
const dependencyMap = arg6;
arg5.supportsHistory = function supportsHistory() {
  const chrome = require(7237) /* getGlobalSingleton */.GLOBAL_OBJ.chrome;
  let runtime = chrome;
  if (chrome) {
    runtime = chrome.app;
  }
  if (runtime) {
    runtime = chrome.app.runtime;
  }
  let pushState = "history" in require(7237) /* getGlobalSingleton */.GLOBAL_OBJ;
  if (pushState) {
    pushState = require(7237) /* getGlobalSingleton */.GLOBAL_OBJ.history.pushState;
  }
  if (pushState) {
    pushState = require(7237) /* getGlobalSingleton */.GLOBAL_OBJ.history.replaceState;
  }
  return !runtime && pushState;
};
