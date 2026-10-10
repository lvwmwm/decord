// Module ID: 17413
// Function ID: 17414
// Name: PlaceholderUtils
// Dependencies: [2]
// Exports: getAdjustedPlaceholderCount

// Module 17413 (PlaceholderUtils)
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
