// Module ID: 10565
// Function ID: 82467
// Name: isAgeRestrictedClassificationReference
// Dependencies: [8223, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 10565 (isAgeRestrictedClassificationReference)
let result = require("set").fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
  let result = null == contentClassification || !contentClassification.loaded;
  if (!result) {
    result = require(8223) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(contentClassification.data);
    const obj = require(8223) /* isAgeRestrictedContentClassification */;
  }
  return result;
};
