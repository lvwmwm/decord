// Module ID: 5654
// Function ID: 5655
// Name: ContentClassificationReference
// Dependencies: [5655, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 5654 (ContentClassificationReference)
import utils from "utils" /* 5655 */;
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
