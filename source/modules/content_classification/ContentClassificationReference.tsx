// Module ID: 10578
// Function ID: 10579
// Name: isAgeRestrictedClassificationReference
// Dependencies: [4834, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 10578 (isAgeRestrictedClassificationReference)
let result = require("set").fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
  let loaded;
  if (contentClassification != null) {
    loaded = contentClassification.loaded;
  }
  let result = !loaded;
  if (loaded) {
    result = require(4834) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(contentClassification.data);
    const obj = require(4834) /* isAgeRestrictedContentClassification */;
  }
  return result;
};
