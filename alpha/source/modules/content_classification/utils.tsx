// Module ID: 5648
// Function ID: 5649
// Name: utils
// Dependencies: [5649, 5651, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5648 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5649 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5651 */;
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
