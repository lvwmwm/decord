// Module ID: 5425
// Function ID: 5426
// Name: utils
// Dependencies: [5426, 5428, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5425 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5426 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5428 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/content_classification/utils.tsx");

export const isAgeRestrictedContentClassification = function isAgeRestrictedContentClassification(contentClassification) {
  let tmp = null != contentClassification;
  if (tmp) {
    const obj = { type: ContentClassificationToAgeRestriction.ContentClassificationVariant.MINIMAL, data: contentClassification };
    const contentClassificationToAgeRestriction = ContentClassificationToAgeRestriction.contentClassificationToAgeRestriction;
    ContentClassificationToAgeRestriction;
    const result = contentClassificationToAgeRestriction(obj);
    tmp = result === AgeRestrictionStatus.AgeRestrictionStatus.ADULT;
  }
  return tmp;
};
