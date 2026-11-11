// Module ID: 5898
// Function ID: 5899
// Name: ContentClassificationReference
// Dependencies: [5899, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 5898 (ContentClassificationReference)
import utils from "utils" /* 5899 */;
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
