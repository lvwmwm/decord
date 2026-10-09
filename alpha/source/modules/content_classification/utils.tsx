// Module ID: 6049
// Function ID: 6050
// Name: utils
// Dependencies: [6050, 6052, 2]
// Exports: isAgeRestrictedContentClassification

// Module 6049 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 6050 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 6052 */;
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
