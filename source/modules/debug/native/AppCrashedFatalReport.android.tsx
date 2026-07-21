// Module ID: 16484
// Function ID: 127293
// Name: init
// Dependencies: []
// Exports: init

// Module 16484 (init)
const CrashReportingManager = require(dependencyMap[0]).NativeModules.CrashReportingManager;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/debug/native/AppCrashedFatalReport.android.tsx");

export const init = function init() {
  CrashReportingManager.initializeManager();
};
