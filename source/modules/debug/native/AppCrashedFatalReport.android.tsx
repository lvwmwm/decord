// Module ID: 17437
// Function ID: 17438
// Name: init
// Dependencies: [17, 2]
// Exports: init

// Module 17437 (init)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const CrashReportingManager = get_ActivityIndicator.NativeModules.CrashReportingManager;
const result = set.fileFinishedImporting("modules/debug/native/AppCrashedFatalReport.android.tsx");

export const init = function init() {
  CrashReportingManager.initializeManager();
};
