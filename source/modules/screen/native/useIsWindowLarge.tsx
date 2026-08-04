// Module ID: 7562
// Function ID: 7563
// Name: useIsWindowLarge
// Dependencies: [4140, 2]
// Exports: default, getIsWindowLarge

// Module 7562 (useIsWindowLarge)
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowLarge.tsx");

export default function useIsWindowLarge() {
  return importDefault(4140)() >= require(4140) /* useWindowSizeClassifier */.WindowSizeClassifier.LARGE;
};
export const getIsWindowLarge = function getIsWindowLarge() {
  const windowSizeClassifier = require(4140) /* useWindowSizeClassifier */.getWindowSizeClassifier();
  return windowSizeClassifier >= require(4140) /* useWindowSizeClassifier */.WindowSizeClassifier.LARGE;
};
