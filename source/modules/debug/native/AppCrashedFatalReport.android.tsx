// Module ID: 16687
// Function ID: 130109
// Name: init
// Dependencies: [27, 2]
// Exports: init

// Module 16687 (init)
const CrashReportingManager = require("get ActivityIndicator").NativeModules.CrashReportingManager;
const result = require("set").fileFinishedImporting("modules/debug/native/AppCrashedFatalReport.android.tsx");

export const init = function init() {
  CrashReportingManager.initializeManager();
};
