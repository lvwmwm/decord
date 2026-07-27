// Module ID: 7966
// Function ID: 63437
// Name: isAgeRestrictedContentClassification
// Dependencies: [5641, 5643, 2]
// Exports: isAgeRestrictedContentClassification

// Module 7966 (isAgeRestrictedContentClassification)
let result = require("set").fileFinishedImporting("modules/content_classification/utils.tsx");

export const isAgeRestrictedContentClassification = function isAgeRestrictedContentClassification(contentClassification) {
  let tmp = null != contentClassification;
  if (tmp) {
    let obj = require(5641) /* _createForOfIteratorHelperLoose */;
    obj = { type: require(5641) /* _createForOfIteratorHelperLoose */.ContentClassificationVariant.MINIMAL, data: contentClassification };
    const result = obj.contentClassificationToAgeRestriction(obj);
    tmp = result === require(5643) /* AgeRestrictionStatus */.AgeRestrictionStatus.ADULT;
  }
  return tmp;
};
