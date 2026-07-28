// Module ID: 5898
// Function ID: 51801
// Name: compare
// Dependencies: [5892, 2]
// Exports: compare

// Module 5898 (compare)
const result = require("set").fileFinishedImporting("../discord_common/js/shared/modules/content_classification/lib/AgeRestrictionUtils.tsx");

export const compare = function compare(arg0, arg1) {
  const prop = require(5892) /* AgeRestrictionStatus */.AGE_RESTRICTION_STATUS_RESTRICTIVENESS_ORDERING;
  const index = prop.indexOf(arg0);
  const prop1 = require(5892) /* AgeRestrictionStatus */.AGE_RESTRICTION_STATUS_RESTRICTIVENESS_ORDERING;
  return index - prop1.indexOf(arg1);
};
