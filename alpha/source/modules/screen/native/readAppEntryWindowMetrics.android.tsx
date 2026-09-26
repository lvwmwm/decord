// Module ID: 1878
// Function ID: 1879
// Name: readAppEntryWindowMetrics
// Dependencies: [1342, 2]
// Exports: readScreenSizeForAppEntry, readWindowSizeForAppEntry

// Module 1878 (readAppEntryWindowMetrics)
import NativeDeviceModuleDefault from "NativeDeviceModule" /* 1342 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/screen/native/readAppEntryWindowMetrics.android.tsx");

export const readWindowSizeForAppEntry = function readWindowSizeForAppEntry(appEntryKey) {
  const obj = NativeDeviceModuleDefault;
  let windowSize;
  if (obj != null) {
    windowSize = obj.getWindowSize(appEntryKey);
  }
  return windowSize;
};
export const readScreenSizeForAppEntry = function readScreenSizeForAppEntry(appEntryKey) {
  const obj = NativeDeviceModuleDefault;
  let screenSize;
  if (obj != null) {
    screenSize = obj.getScreenSize(appEntryKey);
  }
  return screenSize;
};
