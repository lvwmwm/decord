// Module ID: 6869
// Function ID: 54312
// Name: compare
// Dependencies: []
// Exports: compare

// Module 6869 (compare)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/modules/content_classification/lib/AgeRestrictionUtils.tsx");

export const compare = function compare(arg0, arg1) {
  const prop = require(dependencyMap[0]).AGE_RESTRICTION_STATUS_RESTRICTIVENESS_ORDERING;
  const index = prop.indexOf(arg0);
  const prop1 = require(dependencyMap[0]).AGE_RESTRICTION_STATUS_RESTRICTIVENESS_ORDERING;
  return index - prop1.indexOf(arg1);
};
