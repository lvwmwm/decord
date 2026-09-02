// Module ID: 1892
// Function ID: 1893
// Name: readWindowSizeForAppEntry
// Dependencies: [668, 2]
// Exports: readScreenSizeForAppEntry, readWindowSizeForAppEntry

// Module 1892 (readWindowSizeForAppEntry)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 668 */;

const result = set.fileFinishedImporting("modules/screen/native/readAppEntryWindowMetrics.android.tsx");

export const readWindowSizeForAppEntry = function readWindowSizeForAppEntry(appEntryKey) {
  const obj = enforcingDefault;
  let windowSize;
  if (obj != null) {
    windowSize = obj.getWindowSize(appEntryKey);
  }
  return windowSize;
};
export const readScreenSizeForAppEntry = function readScreenSizeForAppEntry(appEntryKey) {
  const obj = enforcingDefault;
  let screenSize;
  if (obj != null) {
    screenSize = obj.getScreenSize(appEntryKey);
  }
  return screenSize;
};
