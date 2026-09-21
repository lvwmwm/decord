// Module ID: 5330
// Function ID: 5331
// Name: utils
// Dependencies: [5331, 5333, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5330 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5331 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5333 */;
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
