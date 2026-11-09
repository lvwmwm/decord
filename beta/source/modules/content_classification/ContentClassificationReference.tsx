// Module ID: 5783
// Function ID: 5784
// Name: ContentClassificationReference
// Dependencies: [5784, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 5783 (ContentClassificationReference)
import utils from "utils" /* 5784 */;
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
