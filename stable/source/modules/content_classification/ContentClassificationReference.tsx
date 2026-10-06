// Module ID: 8804
// Function ID: 8805
// Name: ContentClassificationReference
// Dependencies: [5425, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 8804 (ContentClassificationReference)
import utils from "utils" /* 5425 */;
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
