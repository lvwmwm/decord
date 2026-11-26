// Module ID: 2021
// Function ID: 2022
// Name: react-native
// Dependencies: [1351, 2]
// Exports: readScreenSizeForAppEntry, readWindowSizeForAppEntry

// Module 2021 (react-native)
import react_nativeDefault from "react-native" /* 1351 */;
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
