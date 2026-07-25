// Module ID: 16675
// Function ID: 130062
// Name: init
// Dependencies: [27, 2]
// Exports: init

// Module 16675 (init)
const CrashReportingManager = require("get ActivityIndicator").NativeModules.CrashReportingManager;
const result = require("set").fileFinishedImporting("modules/debug/native/AppCrashedFatalReport.android.tsx");

export const init = function init() {
  CrashReportingManager.initializeManager();
};
