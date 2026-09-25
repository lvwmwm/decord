// Module ID: 8801
// Function ID: 8802
// Name: ContentClassificationReference
// Dependencies: [5417, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 8801 (ContentClassificationReference)
import utils from "utils" /* 5417 */;
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
