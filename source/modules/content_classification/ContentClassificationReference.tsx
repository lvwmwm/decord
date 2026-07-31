// Module ID: 10529
// Function ID: 10530
// Name: isAgeRestrictedClassificationReference
// Dependencies: [5912, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 10529 (isAgeRestrictedClassificationReference)
let result = require("set").fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
  let loaded;
  if (contentClassification != null) {
    loaded = contentClassification.loaded;
  }
  let result = !loaded;
  if (loaded) {
    result = require(5912) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(contentClassification.data);
    const obj = require(5912) /* isAgeRestrictedContentClassification */;
  }
  return result;
};
