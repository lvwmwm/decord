// Module ID: 5827
// Function ID: 5828
// Name: AgeRestrictionUtils
// Dependencies: [5819, 2]
// Exports: compare

// Module 5827 (AgeRestrictionUtils)
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5819 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/modules/content_classification/lib/AgeRestrictionUtils.tsx");

export function compare(arg0, arg1) {
  const prop = AgeRestrictionStatus.AGE_RESTRICTION_STATUS_RESTRICTIVENESS_ORDERING;
  const index = prop.indexOf(arg0);
  const prop1 = AgeRestrictionStatus.AGE_RESTRICTION_STATUS_RESTRICTIVENESS_ORDERING;
  return index - prop1.indexOf(arg1);
}
