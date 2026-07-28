// Module ID: 9115
// Function ID: 71535
// Name: getIsWindowSmall
// Dependencies: [4020, 2]
// Exports: default, useIsWindowSmall

// Module 9115 (getIsWindowSmall)
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowSmall.tsx");

export default function getIsWindowSmall() {
  const windowSizeClassifier = require(4020) /* calculateFromWidth */.getWindowSizeClassifier();
  return windowSizeClassifier <= require(4020) /* calculateFromWidth */.WindowSizeClassifier.SMALL;
};
export const useIsWindowSmall = function useIsWindowSmall() {
  return importDefault(4020)() <= require(4020) /* calculateFromWidth */.WindowSizeClassifier.SMALL;
};
