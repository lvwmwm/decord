// Module ID: 4516
// Function ID: 39738
// Name: bottomTabsDebugLog
// Dependencies: []

// Module 4516 (bottomTabsDebugLog)
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
