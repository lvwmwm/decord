// Module ID: 7686
// Function ID: 7687
// Name: useIsWindowLarge
// Dependencies: [4201, 2]
// Exports: default, getIsWindowLarge

// Module 7686 (useIsWindowLarge)
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowLarge.tsx");

export default function useIsWindowLarge() {
  return importDefault(4201)() >= require(4201) /* useWindowSizeClassifier */.WindowSizeClassifier.LARGE;
};
export const getIsWindowLarge = function getIsWindowLarge() {
  const windowSizeClassifier = require(4201) /* useWindowSizeClassifier */.getWindowSizeClassifier();
  return windowSizeClassifier >= require(4201) /* useWindowSizeClassifier */.WindowSizeClassifier.LARGE;
};
