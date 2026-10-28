// Module ID: 5647
// Function ID: 5648
// Name: ContentClassificationReference
// Dependencies: [5648, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 5647 (ContentClassificationReference)
import utils from "utils" /* 5648 */;
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
