// Module ID: 5414
// Function ID: 5415
// Name: utils
// Dependencies: [5415, 5417, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5414 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5415 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5417 */;
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
