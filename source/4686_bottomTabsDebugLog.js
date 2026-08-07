// Module ID: 4686
// Function ID: 4687
// Name: bottomTabsDebugLog
// Dependencies: []

// Module 4686 (bottomTabsDebugLog)
let c0 = false;
arg5.bottomTabsDebugLog = function bottomTabsDebugLog(arg0) {
  const items = [...arguments];
  if (c0) {
    const _console = console;
    const items1 = [];
    HermesBuiltin.arraySpread(items, 0);
    const _console2 = console;
    HermesBuiltin.apply(items1, console);
  }
};
arg5.internalEnableDetailedBottomTabsLogging = function internalEnableDetailedBottomTabsLogging() {
  let c0 = true;
};
