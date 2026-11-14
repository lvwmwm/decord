// Module ID: 5961
// Function ID: 5962
// Name: ContentClassificationReference
// Dependencies: [5962, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 5961 (ContentClassificationReference)
import utils from "utils" /* 5962 */;
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
