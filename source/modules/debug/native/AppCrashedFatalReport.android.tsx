// Module ID: 16786
// Function ID: 16787
// Name: init
// Dependencies: [17, 2]
// Exports: init

// Module 16786 (init)
const CrashReportingManager = require("get ActivityIndicator").NativeModules.CrashReportingManager;
const result = require("set").fileFinishedImporting("modules/debug/native/AppCrashedFatalReport.android.tsx");

export const init = function init() {
  CrashReportingManager.initializeManager();
};
