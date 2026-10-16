// Module ID: 6260
// Function ID: 6261
// Name: ContentClassificationReference
// Dependencies: [6261, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 6260 (ContentClassificationReference)
import utils from "utils" /* 6261 */;
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
