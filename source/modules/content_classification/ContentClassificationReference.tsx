// Module ID: 10525
// Function ID: 82212
// Name: isAgeRestrictedClassificationReference
// Dependencies: []
// Exports: isAgeRestrictedClassificationReference

// Module 10525 (isAgeRestrictedClassificationReference)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
  let result = null == contentClassification || !contentClassification.loaded;
  if (!result) {
    result = require(dependencyMap[0]).isAgeRestrictedContentClassification(contentClassification.data);
    const obj = require(dependencyMap[0]);
  }
  return result;
};
