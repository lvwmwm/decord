// Module ID: 5644
// Function ID: 5645
// Name: utils
// Dependencies: [5645, 5647, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5644 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5645 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5647 */;
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
