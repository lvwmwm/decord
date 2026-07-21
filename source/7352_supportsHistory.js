// Module ID: 7352
// Function ID: 59263
// Name: supportsHistory
// Dependencies: []

// Module 7352 (supportsHistory)
arg5.supportsHistory = function supportsHistory() {
  const chrome = arg1(arg6[0]).GLOBAL_OBJ.chrome;
  let runtime = chrome;
  if (chrome) {
    runtime = chrome.app;
  }
  if (runtime) {
    runtime = chrome.app.runtime;
  }
  let pushState = "history" in arg1(arg6[0]).GLOBAL_OBJ;
  if (pushState) {
    pushState = arg1(arg6[0]).GLOBAL_OBJ.history.pushState;
  }
  if (pushState) {
    pushState = arg1(arg6[0]).GLOBAL_OBJ.history.replaceState;
  }
  return !runtime && pushState;
};
