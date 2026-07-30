// Module ID: 6558
// Function ID: 6559
// Name: useIsWindowLarge
// Dependencies: [4044, 2]
// Exports: default, getIsWindowLarge

// Module 6558 (useIsWindowLarge)
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowLarge.tsx");

export default function useIsWindowLarge() {
  return importDefault(4044)() >= require(4044) /* useWindowSizeClassifier */.WindowSizeClassifier.LARGE;
};
export const getIsWindowLarge = function getIsWindowLarge() {
  const windowSizeClassifier = require(4044) /* useWindowSizeClassifier */.getWindowSizeClassifier();
  return windowSizeClassifier >= require(4044) /* useWindowSizeClassifier */.WindowSizeClassifier.LARGE;
};
