// Module ID: 10581
// Function ID: 10582
// Name: isAgeRestrictedClassificationReference
// Dependencies: [4817, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 10581 (isAgeRestrictedClassificationReference)
let result = require("set").fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
  let loaded;
  if (contentClassification != null) {
    loaded = contentClassification.loaded;
  }
  let result = !loaded;
  if (loaded) {
    result = require(4817) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(contentClassification.data);
    const obj = require(4817) /* isAgeRestrictedContentClassification */;
  }
  return result;
};
