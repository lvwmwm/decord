// Module ID: 5671
// Function ID: 5672
// Name: ContentClassificationReference
// Dependencies: [5672, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 5671 (ContentClassificationReference)
import utils from "utils" /* 5672 */;
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
