// Module ID: 10645
// Function ID: 10646
// Name: isAgeRestrictedClassificationReference
// Dependencies: [4836, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 10645 (isAgeRestrictedClassificationReference)
let result = require("set").fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
  let loaded;
  if (contentClassification != null) {
    loaded = contentClassification.loaded;
  }
  let result = !loaded;
  if (loaded) {
    result = require(4836) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(contentClassification.data);
    const obj = require(4836) /* isAgeRestrictedContentClassification */;
  }
  return result;
};
