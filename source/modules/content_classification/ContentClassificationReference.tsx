// Module ID: 4785
// Function ID: 4786
// Name: isAgeRestrictedClassificationReference
// Dependencies: [4786, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 4785 (isAgeRestrictedClassificationReference)
let result = require("set").fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
  let loaded;
  if (contentClassification != null) {
    loaded = contentClassification.loaded;
  }
  let result = !loaded;
  if (loaded) {
    result = require(4786) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(contentClassification.data);
    const obj = require(4786) /* isAgeRestrictedContentClassification */;
  }
  return result;
};
