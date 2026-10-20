// Module ID: 6041
// Function ID: 6042
// Name: ContentClassificationReference
// Dependencies: [6042, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 6041 (ContentClassificationReference)
import utils from "utils" /* 6042 */;
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
