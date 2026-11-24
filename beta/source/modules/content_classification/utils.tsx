// Module ID: 5542
// Function ID: 5543
// Name: utils
// Dependencies: [5543, 5545, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5542 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5543 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5545 */;
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
