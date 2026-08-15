// Module ID: 8520
// Function ID: 8521
// Name: getIsWindowSmall
// Dependencies: [4233, 2]
// Exports: default, useIsWindowSmall

// Module 8520 (getIsWindowSmall)
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowSmall.tsx");

export default function getIsWindowSmall() {
  const windowSizeClassifier = require(4233) /* useWindowSizeClassifier */.getWindowSizeClassifier();
  return windowSizeClassifier <= require(4233) /* useWindowSizeClassifier */.WindowSizeClassifier.SMALL;
};
export const useIsWindowSmall = function useIsWindowSmall() {
  return importDefault(4233)() <= require(4233) /* useWindowSizeClassifier */.WindowSizeClassifier.SMALL;
};
