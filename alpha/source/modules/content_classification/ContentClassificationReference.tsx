// Module ID: 5609
// Function ID: 5610
// Name: ContentClassificationReference
// Dependencies: [5610, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 5609 (ContentClassificationReference)
import utils from "utils" /* 5610 */;
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
