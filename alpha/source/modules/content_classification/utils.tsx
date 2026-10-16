// Module ID: 6260
// Function ID: 6261
// Name: utils
// Dependencies: [6261, 6263, 2]
// Exports: isAgeRestrictedContentClassification

// Module 6260 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 6261 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 6263 */;
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
