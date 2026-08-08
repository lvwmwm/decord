// Module ID: 4290
// Function ID: 4291
// Name: getFirstQueryStringValue
// Dependencies: [2]
// Exports: getFirstQueryStringValue

// Module 4290 (getFirstQueryStringValue)
const result = require("set").fileFinishedImporting("utils/QueryStringUtils.tsx");

export const getFirstQueryStringValue = function getFirstQueryStringValue(arg0) {
  let first = arg0;
  if (Array.isArray(arg0)) {
    first = arg0[0];
  }
  return first;
};
