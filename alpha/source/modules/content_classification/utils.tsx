// Module ID: 5649
// Function ID: 5650
// Name: utils
// Dependencies: [5650, 5652, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5649 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5650 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5652 */;
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
