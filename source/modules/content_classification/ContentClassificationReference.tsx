// Module ID: 9409
// Function ID: 9410
// Name: isAgeRestrictedClassificationReference
// Dependencies: [5073, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 9409 (isAgeRestrictedClassificationReference)
import set from "set" /* 2 */;
import isAgeRestrictedContentClassification from "isAgeRestrictedContentClassification" /* 5073 */;

let result = set.fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
  let loaded;
  if (contentClassification != null) {
    loaded = contentClassification.loaded;
  }
  let result = !loaded;
  if (loaded) {
    result = isAgeRestrictedContentClassification.isAgeRestrictedContentClassification(contentClassification.data);
    const obj = isAgeRestrictedContentClassification;
  }
  return result;
};
