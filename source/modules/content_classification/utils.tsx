// Module ID: 5906
// Function ID: 5907
// Name: isAgeRestrictedContentClassification
// Dependencies: [5907, 5909, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5906 (isAgeRestrictedContentClassification)
let result = require("set").fileFinishedImporting("modules/content_classification/utils.tsx");

export const isAgeRestrictedContentClassification = function isAgeRestrictedContentClassification(contentClassification) {
  let tmp = null != contentClassification;
  if (tmp) {
    let obj = require(5907) /* contentClassificationToAgeRestrictionConclusion */;
    obj = { type: null, data: null };
    obj[0] = require(5907) /* contentClassificationToAgeRestrictionConclusion */.ContentClassificationVariant.MINIMAL;
    obj[1] = contentClassification;
    const result = obj.contentClassificationToAgeRestriction(obj);
    tmp = result === require(5909) /* AgeRestrictionStatus */.AgeRestrictionStatus.ADULT;
  }
  return tmp;
};
