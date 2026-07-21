// Module ID: 1822
// Function ID: 20000
// Name: readWindowSizeForAppEntry
// Dependencies: []
// Exports: readScreenSizeForAppEntry, readWindowSizeForAppEntry

// Module 1822 (readWindowSizeForAppEntry)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/screen/native/readAppEntryWindowMetrics.android.tsx");

export const readWindowSizeForAppEntry = function readWindowSizeForAppEntry(appEntryKey) {
  let windowSize;
  if (null != importDefault(dependencyMap[0])) {
    windowSize = importDefault(dependencyMap[0]).getWindowSize(appEntryKey);
    const obj = importDefault(dependencyMap[0]);
  }
  return windowSize;
};
export const readScreenSizeForAppEntry = function readScreenSizeForAppEntry(appEntryKey) {
  let screenSize;
  if (null != importDefault(dependencyMap[0])) {
    screenSize = importDefault(dependencyMap[0]).getScreenSize(appEntryKey);
    const obj = importDefault(dependencyMap[0]);
  }
  return screenSize;
};
