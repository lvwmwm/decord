// Module ID: 5546
// Function ID: 5547
// Name: utils
// Dependencies: [5547, 5549, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5546 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5547 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5549 */;
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
