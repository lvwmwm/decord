// Module ID: 5785
// Function ID: 5786
// Name: ContentClassificationReference
// Dependencies: [5786, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 5785 (ContentClassificationReference)
import utils from "utils" /* 5786 */;
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
