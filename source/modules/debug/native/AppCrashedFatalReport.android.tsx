// Module ID: 16884
// Function ID: 16885
// Name: init
// Dependencies: [17, 2]
// Exports: init

// Module 16884 (init)
const CrashReportingManager = require("get ActivityIndicator").NativeModules.CrashReportingManager;
const result = require("set").fileFinishedImporting("modules/debug/native/AppCrashedFatalReport.android.tsx");

export const init = function init() {
  CrashReportingManager.initializeManager();
};
