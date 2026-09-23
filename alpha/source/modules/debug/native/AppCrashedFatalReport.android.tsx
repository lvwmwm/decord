// Module ID: 18462
// Function ID: 18463
// Name: AppCrashedFatalReport
// Dependencies: [17, 2]
// Exports: init

// Module 18462 (AppCrashedFatalReport)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const CrashReportingManager = _mod17.NativeModules.CrashReportingManager;
const result = size.fileFinishedImporting("modules/debug/native/AppCrashedFatalReport.android.tsx");

export const init = function init() {
  CrashReportingManager.initializeManager();
};
