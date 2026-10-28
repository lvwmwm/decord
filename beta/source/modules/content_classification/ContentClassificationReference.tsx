// Module ID: 5643
// Function ID: 5644
// Name: ContentClassificationReference
// Dependencies: [5644, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 5643 (ContentClassificationReference)
import utils from "utils" /* 5644 */;
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
