// Module ID: 5955
// Function ID: 5956
// Name: ContentClassificationReference
// Dependencies: [5956, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 5955 (ContentClassificationReference)
import utils from "utils" /* 5956 */;
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
