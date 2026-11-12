// Module ID: 5816
// Function ID: 5817
// Name: utils
// Dependencies: [5817, 5819, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5816 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5817 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5819 */;
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
