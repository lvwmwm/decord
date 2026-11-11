// Module ID: 5899
// Function ID: 5900
// Name: utils
// Dependencies: [5900, 5902, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5899 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5900 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5902 */;
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
