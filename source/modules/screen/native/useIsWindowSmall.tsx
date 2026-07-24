// Module ID: 9179
// Function ID: 71898
// Name: getIsWindowSmall
// Dependencies: [3985, 2]
// Exports: default, useIsWindowSmall

// Module 9179 (getIsWindowSmall)
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowSmall.tsx");

export default function getIsWindowSmall() {
  const windowSizeClassifier = require(3985) /* calculateFromWidth */.getWindowSizeClassifier();
  return windowSizeClassifier <= require(3985) /* calculateFromWidth */.WindowSizeClassifier.SMALL;
};
export const useIsWindowSmall = function useIsWindowSmall() {
  return importDefault(3985)() <= require(3985) /* calculateFromWidth */.WindowSizeClassifier.SMALL;
};
