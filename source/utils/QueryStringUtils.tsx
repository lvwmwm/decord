// Module ID: 4115
// Function ID: 34083
// Name: getFirstQueryStringValue
// Dependencies: []
// Exports: getFirstQueryStringValue

// Module 4115 (getFirstQueryStringValue)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("utils/QueryStringUtils.tsx");

export const getFirstQueryStringValue = function getFirstQueryStringValue(arg0) {
  let first = arg0;
  if (Array.isArray(arg0)) {
    first = arg0[0];
  }
  return first;
};
