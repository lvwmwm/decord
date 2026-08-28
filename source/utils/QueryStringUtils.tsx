// Module ID: 4432
// Function ID: 4433
// Name: getFirstQueryStringValue
// Dependencies: [2]
// Exports: getFirstQueryStringValue

// Module 4432 (getFirstQueryStringValue)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("utils/QueryStringUtils.tsx");

export const getFirstQueryStringValue = function getFirstQueryStringValue(arg0) {
  let first = arg0;
  if (Array.isArray(arg0)) {
    first = arg0[0];
  }
  return first;
};
