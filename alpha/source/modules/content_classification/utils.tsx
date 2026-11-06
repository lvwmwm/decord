// Module ID: 5814
// Function ID: 5815
// Name: utils
// Dependencies: [5815, 5817, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5814 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5815 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5817 */;
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
