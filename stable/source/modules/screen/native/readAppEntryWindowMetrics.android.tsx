// Module ID: 1883
// Function ID: 1884
// Name: react-native
// Dependencies: [1353, 2]
// Exports: readScreenSizeForAppEntry, readWindowSizeForAppEntry

// Module 1883 (react-native)
import react_nativeDefault from "react-native" /* 1353 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/screen/native/readAppEntryWindowMetrics.android.tsx");

export const readWindowSizeForAppEntry = function readWindowSizeForAppEntry(appEntryKey) {
  const obj = react_nativeDefault;
  let windowSize;
  if (obj != null) {
    windowSize = obj.getWindowSize(appEntryKey);
  }
  return windowSize;
};
export const readScreenSizeForAppEntry = function readScreenSizeForAppEntry(appEntryKey) {
  const obj = react_nativeDefault;
  let screenSize;
  if (obj != null) {
    screenSize = obj.getScreenSize(appEntryKey);
  }
  return screenSize;
};
