// Module ID: 8122
// Function ID: 64322
// Name: useIsWindowLarge
// Dependencies: []
// Exports: default, getIsWindowLarge

// Module 8122 (useIsWindowLarge)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/screen/native/useIsWindowLarge.tsx");

export default function useIsWindowLarge() {
  return importDefault(dependencyMap[0])() >= require(dependencyMap[0]).WindowSizeClassifier.LARGE;
};
export const getIsWindowLarge = function getIsWindowLarge() {
  const windowSizeClassifier = require(dependencyMap[0]).getWindowSizeClassifier();
  return windowSizeClassifier >= require(dependencyMap[0]).WindowSizeClassifier.LARGE;
};
