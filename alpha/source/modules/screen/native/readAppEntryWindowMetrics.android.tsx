// Module ID: 1896
// Function ID: 1897
// Name: react-native
// Dependencies: [1361, 2]
// Exports: readScreenSizeForAppEntry, readWindowSizeForAppEntry

// Module 1896 (react-native)
import react_nativeDefault from "react-native" /* 1361 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/screen/native/readAppEntryWindowMetrics.android.tsx");

export function readWindowSizeForAppEntry(appEntryKey) {
  const obj = react_nativeDefault;
  let windowSize;
  if (obj != null) {
    windowSize = obj.getWindowSize(appEntryKey);
  }
  return windowSize;
}
export function readScreenSizeForAppEntry(appEntryKey) {
  const obj = react_nativeDefault;
  let screenSize;
  if (obj != null) {
    screenSize = obj.getScreenSize(appEntryKey);
  }
  return screenSize;
}
