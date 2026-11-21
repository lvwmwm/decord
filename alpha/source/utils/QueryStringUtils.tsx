// Module ID: 5634
// Function ID: 5635
// Name: QueryStringUtils
// Dependencies: [2]
// Exports: getFirstQueryStringValue

// Module 5634 (QueryStringUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/QueryStringUtils.tsx");

export function getFirstQueryStringValue(parsed) {
  let first = parsed;
  if (Array.isArray(parsed)) {
    first = parsed[0];
  }
  return first;
}
