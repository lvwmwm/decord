// Module ID: 5897
// Function ID: 5898
// Name: utils
// Dependencies: [5898, 5900, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5897 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5898 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5900 */;
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
