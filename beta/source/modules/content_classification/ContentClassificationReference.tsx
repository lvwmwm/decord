// Module ID: 5541
// Function ID: 5542
// Name: ContentClassificationReference
// Dependencies: [5542, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 5541 (ContentClassificationReference)
import utils from "utils" /* 5542 */;
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
