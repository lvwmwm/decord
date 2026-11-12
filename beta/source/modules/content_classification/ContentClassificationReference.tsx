// Module ID: 5815
// Function ID: 5816
// Name: ContentClassificationReference
// Dependencies: [5816, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 5815 (ContentClassificationReference)
import utils from "utils" /* 5816 */;
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
