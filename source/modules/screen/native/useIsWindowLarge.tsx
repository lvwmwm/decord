// Module ID: 7925
// Function ID: 7926
// Name: useIsWindowLarge
// Dependencies: [4233, 2]
// Exports: default, getIsWindowLarge

// Module 7925 (useIsWindowLarge)
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowLarge.tsx");

export default function useIsWindowLarge() {
  return importDefault(4233)() >= require(4233) /* useWindowSizeClassifier */.WindowSizeClassifier.LARGE;
};
export const getIsWindowLarge = function getIsWindowLarge() {
  const windowSizeClassifier = require(4233) /* useWindowSizeClassifier */.getWindowSizeClassifier();
  return windowSizeClassifier >= require(4233) /* useWindowSizeClassifier */.WindowSizeClassifier.LARGE;
};
