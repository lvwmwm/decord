// Module ID: 5362
// Function ID: 5363
// Name: utils
// Dependencies: [5363, 5365, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5362 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5363 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5365 */;
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
