// Module ID: 5780
// Function ID: 5781
// Name: utils
// Dependencies: [5781, 5783, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5780 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5781 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5783 */;
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
