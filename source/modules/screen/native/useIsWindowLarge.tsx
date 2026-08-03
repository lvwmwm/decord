// Module ID: 7550
// Function ID: 7551
// Name: useIsWindowLarge
// Dependencies: [4110, 2]
// Exports: default, getIsWindowLarge

// Module 7550 (useIsWindowLarge)
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowLarge.tsx");

export default function useIsWindowLarge() {
  return importDefault(4110)() >= require(4110) /* useWindowSizeClassifier */.WindowSizeClassifier.LARGE;
};
export const getIsWindowLarge = function getIsWindowLarge() {
  const windowSizeClassifier = require(4110) /* useWindowSizeClassifier */.getWindowSizeClassifier();
  return windowSizeClassifier >= require(4110) /* useWindowSizeClassifier */.WindowSizeClassifier.LARGE;
};
