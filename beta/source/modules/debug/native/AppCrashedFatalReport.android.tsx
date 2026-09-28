// Module ID: 17751
// Function ID: 17752
// Name: AppCrashedFatalReport
// Dependencies: [17, 2]
// Exports: init

// Module 17751 (AppCrashedFatalReport)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const CrashReportingManager = _mod17.NativeModules.CrashReportingManager;
const result = size.fileFinishedImporting("modules/debug/native/AppCrashedFatalReport.android.tsx");

export const init = function init() {
  CrashReportingManager.initializeManager();
};
