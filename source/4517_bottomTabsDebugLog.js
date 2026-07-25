// Module ID: 4517
// Function ID: 39750
// Name: bottomTabsDebugLog
// Dependencies: []

// Module 4517 (bottomTabsDebugLog)
let c0 = false;
arg5.bottomTabsDebugLog = function bottomTabsDebugLog(arg0) {
  if (c0) {
    const _console = console;
    log(...arguments);
  }
};
arg5.internalEnableDetailedBottomTabsLogging = function internalEnableDetailedBottomTabsLogging() {
  let c0 = true;
};
