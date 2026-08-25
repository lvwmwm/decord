// Module ID: 16049
// Function ID: 16050
// Name: getAdjustedPlaceholderCount
// Dependencies: [2]
// Exports: getAdjustedPlaceholderCount

// Module 16049 (getAdjustedPlaceholderCount)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/PlaceholderUtils.tsx");

export const getAdjustedPlaceholderCount = function getAdjustedPlaceholderCount(numResults) {
  ({ numColumns, placeholderCount } = numResults);
  let num = 0;
  if (0 !== placeholderCount) {
    num = placeholderCount + (numColumns - numResults.numResults % numColumns);
  }
  return num;
};
