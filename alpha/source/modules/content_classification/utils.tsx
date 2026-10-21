// Module ID: 5594
// Function ID: 5595
// Name: utils
// Dependencies: [5595, 5597, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5594 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5595 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5597 */;
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
