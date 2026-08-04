// Module ID: 7004
// Function ID: 7005
// Name: isAgeRestrictedContentClassification
// Dependencies: [7005, 7007, 2]
// Exports: isAgeRestrictedContentClassification

// Module 7004 (isAgeRestrictedContentClassification)
let result = require("set").fileFinishedImporting("modules/content_classification/utils.tsx");

export const isAgeRestrictedContentClassification = function isAgeRestrictedContentClassification(contentClassification) {
  let tmp = null != contentClassification;
  if (tmp) {
    let obj = require(7005) /* contentClassificationToAgeRestrictionConclusion */;
    obj = { type: null, data: null };
    obj[0] = require(7005) /* contentClassificationToAgeRestrictionConclusion */.ContentClassificationVariant.MINIMAL;
    obj[1] = contentClassification;
    const result = obj.contentClassificationToAgeRestriction(obj);
    tmp = result === require(7007) /* AgeRestrictionStatus */.AgeRestrictionStatus.ADULT;
  }
  return tmp;
};
