// Module ID: 16864
// Function ID: 16865
// Name: init
// Dependencies: [17, 2]
// Exports: init

// Module 16864 (init)
const CrashReportingManager = require("get ActivityIndicator").NativeModules.CrashReportingManager;
const result = require("set").fileFinishedImporting("modules/debug/native/AppCrashedFatalReport.android.tsx");

export const init = function init() {
  CrashReportingManager.initializeManager();
};
