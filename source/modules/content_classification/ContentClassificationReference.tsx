// Module ID: 10515
// Function ID: 10516
// Name: isAgeRestrictedClassificationReference
// Dependencies: [5908, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 10515 (isAgeRestrictedClassificationReference)
let result = require("set").fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
  let loaded;
  if (contentClassification != null) {
    loaded = contentClassification.loaded;
  }
  let result = !loaded;
  if (loaded) {
    result = require(5908) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(contentClassification.data);
    const obj = require(5908) /* isAgeRestrictedContentClassification */;
  }
  return result;
};
