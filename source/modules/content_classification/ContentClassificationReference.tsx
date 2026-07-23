// Module ID: 10536
// Function ID: 82275
// Name: isAgeRestrictedClassificationReference
// Dependencies: [8179, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 10536 (isAgeRestrictedClassificationReference)
let result = require("set").fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
  let result = null == contentClassification || !contentClassification.loaded;
  if (!result) {
    result = require(8179) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(contentClassification.data);
    const obj = require(8179) /* isAgeRestrictedContentClassification */;
  }
  return result;
};
