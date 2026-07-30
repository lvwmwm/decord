// Module ID: 10511
// Function ID: 10512
// Name: isAgeRestrictedClassificationReference
// Dependencies: [5906, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 10511 (isAgeRestrictedClassificationReference)
let result = require("set").fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
  let loaded;
  if (contentClassification != null) {
    loaded = contentClassification.loaded;
  }
  let result = !loaded;
  if (loaded) {
    result = require(5906) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(contentClassification.data);
    const obj = require(5906) /* isAgeRestrictedContentClassification */;
  }
  return result;
};
