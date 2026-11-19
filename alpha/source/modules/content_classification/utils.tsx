// Module ID: 5421
// Function ID: 5422
// Name: utils
// Dependencies: [5422, 5424, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5421 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5422 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5424 */;
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
