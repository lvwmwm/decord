// Module ID: 20581
// Function ID: 20582
// Name: react-native
// Dependencies: [17, 2]
// Exports: init

// Module 20581 (react-native)
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const CrashReportingManager = react_native.NativeModules.CrashReportingManager;
const result = size.fileFinishedImporting("modules/debug/native/AppCrashedFatalReport.android.tsx");

export function init() {
  CrashReportingManager.initializeManager();
}
