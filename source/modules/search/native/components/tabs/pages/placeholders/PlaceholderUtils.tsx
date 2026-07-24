// Module ID: 15438
// Function ID: 117791
// Name: getAdjustedPlaceholderCount
// Dependencies: [2]
// Exports: getAdjustedPlaceholderCount

// Module 15438 (getAdjustedPlaceholderCount)
const result = require("set").fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/PlaceholderUtils.tsx");

export const getAdjustedPlaceholderCount = function getAdjustedPlaceholderCount(numResults) {
  let numColumns;
  let placeholderCount;
  ({ numColumns, placeholderCount } = numResults);
  let num = 0;
  if (0 !== placeholderCount) {
    num = placeholderCount + (numColumns - numResults.numResults % numColumns);
  }
  return num;
};
