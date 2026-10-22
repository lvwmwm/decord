// Module ID: 5597
// Function ID: 5598
// Name: ContentClassificationReference
// Dependencies: [5598, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 5597 (ContentClassificationReference)
import utils from "utils" /* 5598 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
  let loaded;
  if (contentClassification != null) {
    loaded = contentClassification.loaded;
  }
  let result = !loaded;
  if (loaded) {
    const obj = utils;
    result = obj.isAgeRestrictedContentClassification(contentClassification.data);
  }
  return result;
};
