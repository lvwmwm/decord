// Module ID: 15448
// Function ID: 117919
// Name: getAdjustedPlaceholderCount
// Dependencies: [2]
// Exports: getAdjustedPlaceholderCount

// Module 15448 (getAdjustedPlaceholderCount)
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
