// Module ID: 5952
// Function ID: 5953
// Name: utils
// Dependencies: [5953, 5955, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5952 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5953 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5955 */;
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
