// Module ID: 18198
// Function ID: 18199
// Name: PlaceholderUtils
// Dependencies: [2]
// Exports: getAdjustedPlaceholderCount

// Module 18198 (PlaceholderUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/PlaceholderUtils.tsx");

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
