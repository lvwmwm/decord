// Module ID: 16664
// Function ID: 129894
// Name: init
// Dependencies: [27, 2]
// Exports: init

// Module 16664 (init)
const CrashReportingManager = require("get ActivityIndicator").NativeModules.CrashReportingManager;
const result = require("set").fileFinishedImporting("modules/debug/native/AppCrashedFatalReport.android.tsx");

export const init = function init() {
  CrashReportingManager.initializeManager();
};
