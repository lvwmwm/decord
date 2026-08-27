// Module ID: 17419
// Function ID: 17420
// Name: init
// Dependencies: [17, 2]
// Exports: init

// Module 17419 (init)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const CrashReportingManager = get_ActivityIndicator.NativeModules.CrashReportingManager;
const result = set.fileFinishedImporting("modules/debug/native/AppCrashedFatalReport.android.tsx");

export const init = function init() {
  CrashReportingManager.initializeManager();
};
