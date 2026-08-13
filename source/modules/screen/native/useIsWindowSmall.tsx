// Module ID: 8459
// Function ID: 8460
// Name: getIsWindowSmall
// Dependencies: [4201, 2]
// Exports: default, useIsWindowSmall

// Module 8459 (getIsWindowSmall)
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowSmall.tsx");

export default function getIsWindowSmall() {
  const windowSizeClassifier = require(4201) /* useWindowSizeClassifier */.getWindowSizeClassifier();
  return windowSizeClassifier <= require(4201) /* useWindowSizeClassifier */.WindowSizeClassifier.SMALL;
};
export const useIsWindowSmall = function useIsWindowSmall() {
  return importDefault(4201)() <= require(4201) /* useWindowSizeClassifier */.WindowSizeClassifier.SMALL;
};
