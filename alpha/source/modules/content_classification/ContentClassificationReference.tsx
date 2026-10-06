// Module ID: 9053
// Function ID: 9054
// Name: ContentClassificationReference
// Dependencies: [5904, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 9053 (ContentClassificationReference)
import utils from "utils" /* 5904 */;
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
