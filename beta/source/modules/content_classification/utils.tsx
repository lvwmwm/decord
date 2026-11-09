// Module ID: 5784
// Function ID: 5785
// Name: utils
// Dependencies: [5785, 5787, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5784 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5785 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5787 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/content_classification/utils.tsx");

export function isAgeRestrictedContentClassification(contentClassification) {
  let tmp = null != contentClassification;
  if (tmp) {
    const obj = { type: ContentClassificationToAgeRestriction.ContentClassificationVariant.MINIMAL, data: contentClassification };
    const contentClassificationToAgeRestriction = ContentClassificationToAgeRestriction.contentClassificationToAgeRestriction;
    ContentClassificationToAgeRestriction;
    const result = contentClassificationToAgeRestriction(obj);
    tmp = result === AgeRestrictionStatus.AgeRestrictionStatus.ADULT;
  }
  return tmp;
}
