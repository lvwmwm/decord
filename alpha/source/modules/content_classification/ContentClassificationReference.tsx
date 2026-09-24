// Module ID: 9703
// Function ID: 9704
// Name: ContentClassificationReference
// Dependencies: [5416, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 9703 (ContentClassificationReference)
import utils from "utils" /* 5416 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
  let loaded;
  if (contentClassification != null) {
    loaded = contentClassification.loaded;
  }
  let result = !loaded;
  if (loaded) {
    result = utils.isAgeRestrictedContentClassification(contentClassification.data);
  }
  return result;
};
