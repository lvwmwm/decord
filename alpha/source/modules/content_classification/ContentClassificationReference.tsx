// Module ID: 9001
// Function ID: 9002
// Name: ContentClassificationReference
// Dependencies: [5609, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 9001 (ContentClassificationReference)
import utils from "utils" /* 5609 */;
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
