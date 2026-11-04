// Module ID: 5794
// Function ID: 5795
// Name: utils
// Dependencies: [5795, 5797, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5794 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5795 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5797 */;
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
