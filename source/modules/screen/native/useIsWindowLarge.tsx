// Module ID: 7682
// Function ID: 7683
// Name: useIsWindowLarge
// Dependencies: [4203, 2]
// Exports: default, getIsWindowLarge

// Module 7682 (useIsWindowLarge)
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowLarge.tsx");

export default function useIsWindowLarge() {
  return importDefault(4203)() >= require(4203) /* useWindowSizeClassifier */.WindowSizeClassifier.LARGE;
};
export const getIsWindowLarge = function getIsWindowLarge() {
  const windowSizeClassifier = require(4203) /* useWindowSizeClassifier */.getWindowSizeClassifier();
  return windowSizeClassifier >= require(4203) /* useWindowSizeClassifier */.WindowSizeClassifier.LARGE;
};
