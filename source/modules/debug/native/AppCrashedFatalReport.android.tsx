// Module ID: 16617
// Function ID: 129570
// Name: init
// Dependencies: [27, 2]
// Exports: init

// Module 16617 (init)
const CrashReportingManager = require("get ActivityIndicator").NativeModules.CrashReportingManager;
const result = require("set").fileFinishedImporting("modules/debug/native/AppCrashedFatalReport.android.tsx");

export const init = function init() {
  CrashReportingManager.initializeManager();
};
