// Module ID: 9139
// Function ID: 9140
// Name: getIsWindowSmall
// Dependencies: [4044, 2]
// Exports: default, useIsWindowSmall

// Module 9139 (getIsWindowSmall)
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowSmall.tsx");

export default function getIsWindowSmall() {
  const windowSizeClassifier = require(4044) /* useWindowSizeClassifier */.getWindowSizeClassifier();
  return windowSizeClassifier <= require(4044) /* useWindowSizeClassifier */.WindowSizeClassifier.SMALL;
};
export const useIsWindowSmall = function useIsWindowSmall() {
  return importDefault(4044)() <= require(4044) /* useWindowSizeClassifier */.WindowSizeClassifier.SMALL;
};
