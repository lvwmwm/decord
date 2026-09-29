// Module ID: 5591
// Function ID: 5592
// Name: utils
// Dependencies: [5592, 5594, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5591 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5592 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5594 */;
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
