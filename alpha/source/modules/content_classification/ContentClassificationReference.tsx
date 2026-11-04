// Module ID: 5793
// Function ID: 5794
// Name: ContentClassificationReference
// Dependencies: [5794, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 5793 (ContentClassificationReference)
import utils from "utils" /* 5794 */;
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
