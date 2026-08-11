// Module ID: 1893
// Function ID: 1894
// Name: readWindowSizeForAppEntry
// Dependencies: [671, 2]
// Exports: readScreenSizeForAppEntry, readWindowSizeForAppEntry

// Module 1893 (readWindowSizeForAppEntry)
const result = require("set").fileFinishedImporting("modules/screen/native/readAppEntryWindowMetrics.android.tsx");

export const readWindowSizeForAppEntry = function readWindowSizeForAppEntry(appEntryKey) {
  const obj = importDefault(671);
  let windowSize;
  if (obj != null) {
    windowSize = obj.getWindowSize(appEntryKey);
  }
  return windowSize;
};
export const readScreenSizeForAppEntry = function readScreenSizeForAppEntry(appEntryKey) {
  const obj = importDefault(671);
  let screenSize;
  if (obj != null) {
    screenSize = obj.getScreenSize(appEntryKey);
  }
  return screenSize;
};
