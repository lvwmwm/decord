// Module ID: 5612
// Function ID: 5613
// Name: ContentClassificationReference
// Dependencies: [5613, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 5612 (ContentClassificationReference)
import utils from "utils" /* 5613 */;
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
