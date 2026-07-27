// Module ID: 10453
// Function ID: 81083
// Name: isAgeRestrictedClassificationReference
// Dependencies: [7966, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 10453 (isAgeRestrictedClassificationReference)
let result = require("set").fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
  let result = null == contentClassification || !contentClassification.loaded;
  if (!result) {
    result = require(7966) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(contentClassification.data);
    const obj = require(7966) /* isAgeRestrictedContentClassification */;
  }
  return result;
};
