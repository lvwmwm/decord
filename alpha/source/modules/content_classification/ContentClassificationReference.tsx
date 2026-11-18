// Module ID: 5451
// Function ID: 5452
// Name: ContentClassificationReference
// Dependencies: [5452, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 5451 (ContentClassificationReference)
import utils from "utils" /* 5452 */;
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
