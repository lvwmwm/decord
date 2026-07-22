// Module ID: 9136
// Function ID: 71648
// Name: getIsWindowSmall
// Dependencies: []
// Exports: default, useIsWindowSmall

// Module 9136 (getIsWindowSmall)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/screen/native/useIsWindowSmall.tsx");

export default function getIsWindowSmall() {
  const windowSizeClassifier = require(dependencyMap[0]).getWindowSizeClassifier();
  return windowSizeClassifier <= require(dependencyMap[0]).WindowSizeClassifier.SMALL;
};
export const useIsWindowSmall = function useIsWindowSmall() {
  return importDefault(dependencyMap[0])() <= require(dependencyMap[0]).WindowSizeClassifier.SMALL;
};
