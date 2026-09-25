// Module ID: 5417
// Function ID: 5418
// Name: utils
// Dependencies: [5418, 5420, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5417 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5418 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5420 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/content_classification/utils.tsx");

export const isAgeRestrictedContentClassification = function isAgeRestrictedContentClassification(contentClassification) {
  let tmp = null != contentClassification;
  if (tmp) {
    const obj2 = { type: ContentClassificationToAgeRestriction.ContentClassificationVariant.MINIMAL, data: contentClassification };
    const result = ContentClassificationToAgeRestriction.contentClassificationToAgeRestriction(obj2);
    tmp = result === AgeRestrictionStatus.AgeRestrictionStatus.ADULT;
  }
  return tmp;
};
