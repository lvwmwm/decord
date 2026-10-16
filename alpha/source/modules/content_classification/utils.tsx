// Module ID: 6261
// Function ID: 6262
// Name: utils
// Dependencies: [6262, 6264, 2]
// Exports: isAgeRestrictedContentClassification

// Module 6261 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 6262 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 6264 */;
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
