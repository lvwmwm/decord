// Module ID: 7581
// Function ID: 7582
// Name: useIsWindowLarge
// Dependencies: [4156, 2]
// Exports: default, getIsWindowLarge

// Module 7581 (useIsWindowLarge)
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowLarge.tsx");

export default function useIsWindowLarge() {
  return importDefault(4156)() >= require(4156) /* useWindowSizeClassifier */.WindowSizeClassifier.LARGE;
};
export const getIsWindowLarge = function getIsWindowLarge() {
  const windowSizeClassifier = require(4156) /* useWindowSizeClassifier */.getWindowSizeClassifier();
  return windowSizeClassifier >= require(4156) /* useWindowSizeClassifier */.WindowSizeClassifier.LARGE;
};
