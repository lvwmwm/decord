// Module ID: 6318
// Function ID: 6319
// Name: ContentClassificationReference
// Dependencies: [6319, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 6318 (ContentClassificationReference)
import utils from "utils" /* 6319 */;
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
