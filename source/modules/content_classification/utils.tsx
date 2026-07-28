// Module ID: 8003
// Function ID: 63546
// Name: isAgeRestrictedContentClassification
// Dependencies: [5890, 5892, 2]
// Exports: isAgeRestrictedContentClassification

// Module 8003 (isAgeRestrictedContentClassification)
let result = require("set").fileFinishedImporting("modules/content_classification/utils.tsx");

export const isAgeRestrictedContentClassification = function isAgeRestrictedContentClassification(contentClassification) {
  let tmp = null != contentClassification;
  if (tmp) {
    let obj = require(5890) /* _createForOfIteratorHelperLoose */;
    obj = { type: require(5890) /* _createForOfIteratorHelperLoose */.ContentClassificationVariant.MINIMAL, data: contentClassification };
    const result = obj.contentClassificationToAgeRestriction(obj);
    tmp = result === require(5892) /* AgeRestrictionStatus */.AgeRestrictionStatus.ADULT;
  }
  return tmp;
};
