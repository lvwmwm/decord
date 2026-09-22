// Module ID: 4743
// Function ID: 4744
// Name: QueryStringUtils
// Dependencies: [2]
// Exports: getFirstQueryStringValue

// Module 4743 (QueryStringUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/QueryStringUtils.tsx");

export const getFirstQueryStringValue = function getFirstQueryStringValue(parsed) {
  let first = parsed;
  if (Array.isArray(parsed)) {
    first = parsed[0];
  }
  return first;
};
