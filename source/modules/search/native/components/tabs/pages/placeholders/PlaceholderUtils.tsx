// Module ID: 15256
// Function ID: 115194
// Name: getAdjustedPlaceholderCount
// Dependencies: []
// Exports: getAdjustedPlaceholderCount

// Module 15256 (getAdjustedPlaceholderCount)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/PlaceholderUtils.tsx");

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
