// Module ID: 10619
// Function ID: 10620
// Name: isAgeRestrictedClassificationReference
// Dependencies: [4877, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 10619 (isAgeRestrictedClassificationReference)
let result = require("set").fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
  let loaded;
  if (contentClassification != null) {
    loaded = contentClassification.loaded;
  }
  let result = !loaded;
  if (loaded) {
    result = require(4877) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(contentClassification.data);
    const obj = require(4877) /* isAgeRestrictedContentClassification */;
  }
  return result;
};
