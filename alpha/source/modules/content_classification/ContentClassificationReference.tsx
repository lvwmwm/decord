// Module ID: 6048
// Function ID: 6049
// Name: ContentClassificationReference
// Dependencies: [6049, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 6048 (ContentClassificationReference)
import utils from "utils" /* 6049 */;
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
