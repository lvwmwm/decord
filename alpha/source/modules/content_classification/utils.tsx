// Module ID: 5962
// Function ID: 5963
// Name: utils
// Dependencies: [5963, 5965, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5962 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5963 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5965 */;
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
