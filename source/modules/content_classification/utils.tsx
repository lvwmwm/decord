// Module ID: 8173
// Function ID: 64526
// Name: isAgeRestrictedContentClassification
// Dependencies: []
// Exports: isAgeRestrictedContentClassification

// Module 8173 (isAgeRestrictedContentClassification)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/content_classification/utils.tsx");

export const isAgeRestrictedContentClassification = function isAgeRestrictedContentClassification(contentClassification) {
  let tmp = null != contentClassification;
  if (tmp) {
    let obj = require(dependencyMap[0]);
    obj = { type: require(dependencyMap[0]).ContentClassificationVariant.MINIMAL, data: contentClassification };
    const result = obj.contentClassificationToAgeRestriction(obj);
    tmp = result === require(dependencyMap[1]).AgeRestrictionStatus.ADULT;
  }
  return tmp;
};
