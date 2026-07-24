// Module ID: 8223
// Function ID: 64791
// Name: isAgeRestrictedContentClassification
// Dependencies: [6866, 6868, 2]
// Exports: isAgeRestrictedContentClassification

// Module 8223 (isAgeRestrictedContentClassification)
let result = require("set").fileFinishedImporting("modules/content_classification/utils.tsx");

export const isAgeRestrictedContentClassification = function isAgeRestrictedContentClassification(contentClassification) {
  let tmp = null != contentClassification;
  if (tmp) {
    let obj = require(6866) /* _createForOfIteratorHelperLoose */;
    obj = { type: require(6866) /* _createForOfIteratorHelperLoose */.ContentClassificationVariant.MINIMAL, data: contentClassification };
    const result = obj.contentClassificationToAgeRestriction(obj);
    tmp = result === require(6868) /* AgeRestrictionStatus */.AgeRestrictionStatus.ADULT;
  }
  return tmp;
};
