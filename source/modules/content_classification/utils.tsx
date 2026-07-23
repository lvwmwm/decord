// Module ID: 8179
// Function ID: 64563
// Name: isAgeRestrictedContentClassification
// Dependencies: [6867, 6869, 2]
// Exports: isAgeRestrictedContentClassification

// Module 8179 (isAgeRestrictedContentClassification)
let result = require("set").fileFinishedImporting("modules/content_classification/utils.tsx");

export const isAgeRestrictedContentClassification = function isAgeRestrictedContentClassification(contentClassification) {
  let tmp = null != contentClassification;
  if (tmp) {
    let obj = require(6867) /* _createForOfIteratorHelperLoose */;
    obj = { type: require(6867) /* _createForOfIteratorHelperLoose */.ContentClassificationVariant.MINIMAL, data: contentClassification };
    const result = obj.contentClassificationToAgeRestriction(obj);
    tmp = result === require(6869) /* AgeRestrictionStatus */.AgeRestrictionStatus.ADULT;
  }
  return tmp;
};
