// Module ID: 7643
// Function ID: 7644
// Name: useIsWindowLarge
// Dependencies: [4162, 2]
// Exports: default, getIsWindowLarge

// Module 7643 (useIsWindowLarge)
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowLarge.tsx");

export default function useIsWindowLarge() {
  return importDefault(4162)() >= require(4162) /* useWindowSizeClassifier */.WindowSizeClassifier.LARGE;
};
export const getIsWindowLarge = function getIsWindowLarge() {
  const windowSizeClassifier = require(4162) /* useWindowSizeClassifier */.getWindowSizeClassifier();
  return windowSizeClassifier >= require(4162) /* useWindowSizeClassifier */.WindowSizeClassifier.LARGE;
};
