// Module ID: 1822
// Function ID: 20001
// Name: readWindowSizeForAppEntry
// Dependencies: [648, 2]
// Exports: readScreenSizeForAppEntry, readWindowSizeForAppEntry

// Module 1822 (readWindowSizeForAppEntry)
const result = require("set").fileFinishedImporting("modules/screen/native/readAppEntryWindowMetrics.android.tsx");

export const readWindowSizeForAppEntry = function readWindowSizeForAppEntry(appEntryKey) {
  let windowSize;
  if (null != importDefault(648)) {
    windowSize = importDefault(648).getWindowSize(appEntryKey);
    const obj = importDefault(648);
  }
  return windowSize;
};
export const readScreenSizeForAppEntry = function readScreenSizeForAppEntry(appEntryKey) {
  let screenSize;
  if (null != importDefault(648)) {
    screenSize = importDefault(648).getScreenSize(appEntryKey);
    const obj = importDefault(648);
  }
  return screenSize;
};
