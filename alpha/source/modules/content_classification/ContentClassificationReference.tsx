// Module ID: 5795
// Function ID: 5796
// Name: ContentClassificationReference
// Dependencies: [5796, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 5795 (ContentClassificationReference)
import utils from "utils" /* 5796 */;
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
