// Module ID: 5610
// Function ID: 5611
// Name: utils
// Dependencies: [5611, 5613, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5610 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5611 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5613 */;
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
