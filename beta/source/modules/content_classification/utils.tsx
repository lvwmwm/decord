// Module ID: 5612
// Function ID: 5613
// Name: utils
// Dependencies: [5613, 5615, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5612 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5613 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5615 */;
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
