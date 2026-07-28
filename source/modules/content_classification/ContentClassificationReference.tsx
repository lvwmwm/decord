// Module ID: 10491
// Function ID: 81204
// Name: isAgeRestrictedClassificationReference
// Dependencies: [8003, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 10491 (isAgeRestrictedClassificationReference)
let result = require("set").fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
  let result = null == contentClassification || !contentClassification.loaded;
  if (!result) {
    result = require(8003) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(contentClassification.data);
    const obj = require(8003) /* isAgeRestrictedContentClassification */;
  }
  return result;
};
