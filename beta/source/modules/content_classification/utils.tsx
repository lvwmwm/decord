// Module ID: 5660
// Function ID: 5661
// Name: utils
// Dependencies: [5661, 5663, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5660 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5661 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5663 */;
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
