// Module ID: 5956
// Function ID: 5957
// Name: utils
// Dependencies: [5957, 5959, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5956 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5957 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5959 */;
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
