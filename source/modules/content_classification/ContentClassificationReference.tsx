// Module ID: 10703
// Function ID: 10704
// Name: isAgeRestrictedClassificationReference
// Dependencies: [4876, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 10703 (isAgeRestrictedClassificationReference)
let result = require("set").fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
  let loaded;
  if (contentClassification != null) {
    loaded = contentClassification.loaded;
  }
  let result = !loaded;
  if (loaded) {
    result = require(4876) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(contentClassification.data);
    const obj = require(4876) /* isAgeRestrictedContentClassification */;
  }
  return result;
};
