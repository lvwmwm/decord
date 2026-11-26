// Module ID: 5672
// Function ID: 5673
// Name: utils
// Dependencies: [5673, 5675, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5672 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5673 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5675 */;
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
