// Module ID: 5613
// Function ID: 5614
// Name: utils
// Dependencies: [5614, 5616, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5613 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5614 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5616 */;
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
