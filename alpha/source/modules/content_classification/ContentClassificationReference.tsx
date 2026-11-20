// Module ID: 5422
// Function ID: 5423
// Name: ContentClassificationReference
// Dependencies: [5423, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 5422 (ContentClassificationReference)
import utils from "utils" /* 5423 */;
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
