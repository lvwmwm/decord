// Module ID: 5593
// Function ID: 5594
// Name: ContentClassificationReference
// Dependencies: [5594, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 5593 (ContentClassificationReference)
import utils from "utils" /* 5594 */;
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
