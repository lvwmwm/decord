// Module ID: 5337
// Function ID: 5338
// Name: AgeRestrictionUtils
// Dependencies: [5331, 2]
// Exports: compare

// Module 5337 (AgeRestrictionUtils)
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5331 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/modules/content_classification/lib/AgeRestrictionUtils.tsx");

export const compare = function compare(arg0, arg1) {
  const prop = AgeRestrictionStatus.AGE_RESTRICTION_STATUS_RESTRICTIVENESS_ORDERING;
  const index = prop.indexOf(arg0);
  const prop1 = AgeRestrictionStatus.AGE_RESTRICTION_STATUS_RESTRICTIVENESS_ORDERING;
  return index - prop1.indexOf(arg1);
};
