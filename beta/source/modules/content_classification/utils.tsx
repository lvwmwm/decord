// Module ID: 5328
// Function ID: 5329
// Name: utils
// Dependencies: [5329, 5331, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5328 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5329 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5331 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/content_classification/utils.tsx");

export const isAgeRestrictedContentClassification = function isAgeRestrictedContentClassification(contentClassification) {
  let tmp = null != contentClassification;
  if (tmp) {
    const obj2 = { type: ContentClassificationToAgeRestriction.ContentClassificationVariant.MINIMAL, data: contentClassification };
    const result = ContentClassificationToAgeRestriction.contentClassificationToAgeRestriction(obj2);
    tmp = result === AgeRestrictionStatus.AgeRestrictionStatus.ADULT;
  }
  return tmp;
};
