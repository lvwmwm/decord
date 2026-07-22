// Module ID: 16500
// Function ID: 127396
// Name: init
// Dependencies: []
// Exports: init

// Module 16500 (init)
const CrashReportingManager = require(dependencyMap[0]).NativeModules.CrashReportingManager;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/debug/native/AppCrashedFatalReport.android.tsx");

export const init = function init() {
  CrashReportingManager.initializeManager();
};
