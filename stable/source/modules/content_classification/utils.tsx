// Module ID: 6319
// Function ID: 6320
// Name: utils
// Dependencies: [6320, 6322, 2]
// Exports: isAgeRestrictedContentClassification

// Module 6319 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 6320 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 6322 */;
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
