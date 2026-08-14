// Module ID: 10635
// Function ID: 10636
// Name: isAgeRestrictedClassificationReference
// Dependencies: [4899, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 10635 (isAgeRestrictedClassificationReference)
let result = require("set").fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
  let loaded;
  if (contentClassification != null) {
    loaded = contentClassification.loaded;
  }
  let result = !loaded;
  if (loaded) {
    result = require(4899) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(contentClassification.data);
    const obj = require(4899) /* isAgeRestrictedContentClassification */;
  }
  return result;
};
