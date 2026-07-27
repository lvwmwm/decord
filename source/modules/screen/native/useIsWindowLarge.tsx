// Module ID: 6504
// Function ID: 58127
// Name: useIsWindowLarge
// Dependencies: [3986, 2]
// Exports: default, getIsWindowLarge

// Module 6504 (useIsWindowLarge)
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowLarge.tsx");

export default function useIsWindowLarge() {
  return importDefault(3986)() >= require(3986) /* calculateFromWidth */.WindowSizeClassifier.LARGE;
};
export const getIsWindowLarge = function getIsWindowLarge() {
  const windowSizeClassifier = require(3986) /* calculateFromWidth */.getWindowSizeClassifier();
  return windowSizeClassifier >= require(3986) /* calculateFromWidth */.WindowSizeClassifier.LARGE;
};
