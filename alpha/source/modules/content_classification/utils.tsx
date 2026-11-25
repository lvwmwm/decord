// Module ID: 5641
// Function ID: 5642
// Name: utils
// Dependencies: [5642, 5644, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5641 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5642 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5644 */;
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
