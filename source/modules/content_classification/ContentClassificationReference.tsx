// Module ID: 10714
// Function ID: 10715
// Name: isAgeRestrictedClassificationReference
// Dependencies: [6992, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 10714 (isAgeRestrictedClassificationReference)
let result = require("set").fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
  let loaded;
  if (contentClassification != null) {
    loaded = contentClassification.loaded;
  }
  let result = !loaded;
  if (loaded) {
    result = require(6992) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(contentClassification.data);
    const obj = require(6992) /* isAgeRestrictedContentClassification */;
  }
  return result;
};
