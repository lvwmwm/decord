// Module ID: 5796
// Function ID: 5797
// Name: utils
// Dependencies: [5797, 5799, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5796 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5797 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5799 */;
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
