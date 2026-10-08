// Module ID: 5073
// Function ID: 5074
// Name: QueryStringUtils
// Dependencies: [2]
// Exports: getFirstQueryStringValue

// Module 5073 (QueryStringUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/QueryStringUtils.tsx");

export const getFirstQueryStringValue = function getFirstQueryStringValue(parsed) {
  let first = parsed;
  if (Array.isArray(parsed)) {
    first = parsed[0];
  }
  return first;
};
