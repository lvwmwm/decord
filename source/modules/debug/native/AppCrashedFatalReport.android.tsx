// Module ID: 17096
// Function ID: 17097
// Name: init
// Dependencies: [17, 2]
// Exports: init

// Module 17096 (init)
const CrashReportingManager = require("get ActivityIndicator").NativeModules.CrashReportingManager;
const result = require("set").fileFinishedImporting("modules/debug/native/AppCrashedFatalReport.android.tsx");

export const init = function init() {
  CrashReportingManager.initializeManager();
};
