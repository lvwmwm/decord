// Module ID: 6042
// Function ID: 6043
// Name: utils
// Dependencies: [6043, 6045, 2]
// Exports: isAgeRestrictedContentClassification

// Module 6042 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 6043 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 6045 */;
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
