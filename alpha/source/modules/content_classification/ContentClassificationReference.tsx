// Module ID: 6259
// Function ID: 6260
// Name: ContentClassificationReference
// Dependencies: [6260, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 6259 (ContentClassificationReference)
import utils from "utils" /* 6260 */;
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
