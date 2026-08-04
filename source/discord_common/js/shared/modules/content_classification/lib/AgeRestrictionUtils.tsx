// Module ID: 7013
// Function ID: 7014
// Name: compare
// Dependencies: [7007, 2]
// Exports: compare

// Module 7013 (compare)
const result = require("set").fileFinishedImporting("../discord_common/js/shared/modules/content_classification/lib/AgeRestrictionUtils.tsx");

export const compare = function compare(arg0, arg1) {
  const prop = require(7007) /* AgeRestrictionStatus */.AGE_RESTRICTION_STATUS_RESTRICTIVENESS_ORDERING;
  const index = prop.indexOf(arg0);
  const prop1 = require(7007) /* AgeRestrictionStatus */.AGE_RESTRICTION_STATUS_RESTRICTIVENESS_ORDERING;
  return index - prop1.indexOf(arg1);
};
