// Module ID: 5655
// Function ID: 5656
// Name: utils
// Dependencies: [5656, 5658, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5655 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5656 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5658 */;
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
