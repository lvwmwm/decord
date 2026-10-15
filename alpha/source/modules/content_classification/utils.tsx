// Module ID: 6258
// Function ID: 6259
// Name: utils
// Dependencies: [6259, 6261, 2]
// Exports: isAgeRestrictedContentClassification

// Module 6258 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 6259 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 6261 */;
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
