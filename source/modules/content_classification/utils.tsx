// Module ID: 4876
// Function ID: 4877
// Name: isAgeRestrictedContentClassification
// Dependencies: [4877, 4879, 2]
// Exports: isAgeRestrictedContentClassification

// Module 4876 (isAgeRestrictedContentClassification)
let result = require("set").fileFinishedImporting("modules/content_classification/utils.tsx");

export const isAgeRestrictedContentClassification = function isAgeRestrictedContentClassification(contentClassification) {
  let tmp = null != contentClassification;
  if (tmp) {
    let obj = require(4877) /* contentClassificationToAgeRestrictionConclusion */;
    obj = { type: null, data: null };
    obj[0] = require(4877) /* contentClassificationToAgeRestrictionConclusion */.ContentClassificationVariant.MINIMAL;
    obj[1] = contentClassification;
    const result = obj.contentClassificationToAgeRestriction(obj);
    tmp = result === require(4879) /* AgeRestrictionStatus */.AgeRestrictionStatus.ADULT;
  }
  return tmp;
};
