// Module ID: 5598
// Function ID: 5599
// Name: utils
// Dependencies: [5599, 5601, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5598 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5599 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5601 */;
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
