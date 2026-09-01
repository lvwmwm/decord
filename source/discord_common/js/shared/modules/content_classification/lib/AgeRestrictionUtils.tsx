// Module ID: 5066
// Function ID: 5067
// Name: compare
// Dependencies: [5060, 2]
// Exports: compare

// Module 5066 (compare)
import set from "set" /* 2 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5060 */;

const result = set.fileFinishedImporting("../discord_common/js/shared/modules/content_classification/lib/AgeRestrictionUtils.tsx");

export const compare = function compare(arg0, arg1) {
  const prop = AgeRestrictionStatus.AGE_RESTRICTION_STATUS_RESTRICTIVENESS_ORDERING;
  const index = prop.indexOf(arg0);
  const prop1 = AgeRestrictionStatus.AGE_RESTRICTION_STATUS_RESTRICTIVENESS_ORDERING;
  return index - prop1.indexOf(arg1);
};
