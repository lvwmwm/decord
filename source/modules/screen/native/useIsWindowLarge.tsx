// Module ID: 6540
// Function ID: 58216
// Name: useIsWindowLarge
// Dependencies: [4020, 2]
// Exports: default, getIsWindowLarge

// Module 6540 (useIsWindowLarge)
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowLarge.tsx");

export default function useIsWindowLarge() {
  return importDefault(4020)() >= require(4020) /* calculateFromWidth */.WindowSizeClassifier.LARGE;
};
export const getIsWindowLarge = function getIsWindowLarge() {
  const windowSizeClassifier = require(4020) /* calculateFromWidth */.getWindowSizeClassifier();
  return windowSizeClassifier >= require(4020) /* calculateFromWidth */.WindowSizeClassifier.LARGE;
};
