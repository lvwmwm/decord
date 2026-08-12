// Module ID: 8455
// Function ID: 8456
// Name: getIsWindowSmall
// Dependencies: [4203, 2]
// Exports: default, useIsWindowSmall

// Module 8455 (getIsWindowSmall)
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowSmall.tsx");

export default function getIsWindowSmall() {
  const windowSizeClassifier = require(4203) /* useWindowSizeClassifier */.getWindowSizeClassifier();
  return windowSizeClassifier <= require(4203) /* useWindowSizeClassifier */.WindowSizeClassifier.SMALL;
};
export const useIsWindowSmall = function useIsWindowSmall() {
  return importDefault(4203)() <= require(4203) /* useWindowSizeClassifier */.WindowSizeClassifier.SMALL;
};
