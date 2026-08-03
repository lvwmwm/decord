// Module ID: 6992
// Function ID: 6993
// Name: isAgeRestrictedContentClassification
// Dependencies: [6993, 6995, 2]
// Exports: isAgeRestrictedContentClassification

// Module 6992 (isAgeRestrictedContentClassification)
let result = require("set").fileFinishedImporting("modules/content_classification/utils.tsx");

export const isAgeRestrictedContentClassification = function isAgeRestrictedContentClassification(contentClassification) {
  let tmp = null != contentClassification;
  if (tmp) {
    let obj = require(6993) /* contentClassificationToAgeRestrictionConclusion */;
    obj = { type: null, data: null };
    obj[0] = require(6993) /* contentClassificationToAgeRestrictionConclusion */.ContentClassificationVariant.MINIMAL;
    obj[1] = contentClassification;
    const result = obj.contentClassificationToAgeRestriction(obj);
    tmp = result === require(6995) /* AgeRestrictionStatus */.AgeRestrictionStatus.ADULT;
  }
  return tmp;
};
