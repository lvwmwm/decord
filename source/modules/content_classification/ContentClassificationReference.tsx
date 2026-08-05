// Module ID: 10536
// Function ID: 10537
// Name: isAgeRestrictedClassificationReference
// Dependencies: [4787, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 10536 (isAgeRestrictedClassificationReference)
let result = require("set").fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
  let loaded;
  if (contentClassification != null) {
    loaded = contentClassification.loaded;
  }
  let result = !loaded;
  if (loaded) {
    result = require(4787) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(contentClassification.data);
    const obj = require(4787) /* isAgeRestrictedContentClassification */;
  }
  return result;
};
