// Module ID: 5360
// Function ID: 5361
// Name: utils
// Dependencies: [5361, 5363, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5360 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5361 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5363 */;
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
