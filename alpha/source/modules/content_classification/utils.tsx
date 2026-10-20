// Module ID: 5573
// Function ID: 5574
// Name: utils
// Dependencies: [5574, 5576, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5573 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5574 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5576 */;
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
