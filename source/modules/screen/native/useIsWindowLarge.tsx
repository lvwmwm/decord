// Module ID: 7423
// Function ID: 59671
// Name: useIsWindowLarge
// Dependencies: [3985, 2]
// Exports: default, getIsWindowLarge

// Module 7423 (useIsWindowLarge)
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowLarge.tsx");

export default function useIsWindowLarge() {
  return importDefault(3985)() >= require(3985) /* calculateFromWidth */.WindowSizeClassifier.LARGE;
};
export const getIsWindowLarge = function getIsWindowLarge() {
  const windowSizeClassifier = require(3985) /* calculateFromWidth */.getWindowSizeClassifier();
  return windowSizeClassifier >= require(3985) /* calculateFromWidth */.WindowSizeClassifier.LARGE;
};
