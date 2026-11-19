// Module ID: 5420
// Function ID: 5421
// Name: ContentClassificationReference
// Dependencies: [5421, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 5420 (ContentClassificationReference)
import utils from "utils" /* 5421 */;
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
