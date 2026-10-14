// Module ID: 6046
// Function ID: 6047
// Name: ContentClassificationReference
// Dependencies: [6047, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 6046 (ContentClassificationReference)
import utils from "utils" /* 6047 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
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
};
