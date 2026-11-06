// Module ID: 5813
// Function ID: 5814
// Name: ContentClassificationReference
// Dependencies: [5814, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 5813 (ContentClassificationReference)
import utils from "utils" /* 5814 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export function isAgeRestrictedClassificationReference(contentClassification) {
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
}
