// Module ID: 9626
// Function ID: 9627
// Name: ContentClassificationReference
// Dependencies: [5330, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 9626 (ContentClassificationReference)
import utils from "utils" /* 5330 */;
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
