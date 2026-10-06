// Module ID: 5914
// Function ID: 5915
// Name: AgeRestrictionUtils
// Dependencies: [5907, 2]
// Exports: compare

// Module 5914 (AgeRestrictionUtils)
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5907 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/modules/content_classification/lib/AgeRestrictionUtils.tsx");

export const compare = function compare(arg0, arg1) {
  const prop = AgeRestrictionStatus.AGE_RESTRICTION_STATUS_RESTRICTIVENESS_ORDERING;
  const index = prop.indexOf(arg0);
  const prop1 = AgeRestrictionStatus.AGE_RESTRICTION_STATUS_RESTRICTIVENESS_ORDERING;
  return index - prop1.indexOf(arg1);
};
