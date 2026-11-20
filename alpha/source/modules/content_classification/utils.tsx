// Module ID: 5423
// Function ID: 5424
// Name: utils
// Dependencies: [5424, 5426, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5423 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5424 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5426 */;
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
