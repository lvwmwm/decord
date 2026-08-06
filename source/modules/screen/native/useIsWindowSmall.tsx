// Module ID: 8333
// Function ID: 8334
// Name: getIsWindowSmall
// Dependencies: [4139, 2]
// Exports: default, useIsWindowSmall

// Module 8333 (getIsWindowSmall)
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowSmall.tsx");

export default function getIsWindowSmall() {
  const windowSizeClassifier = require(4139) /* useWindowSizeClassifier */.getWindowSizeClassifier();
  return windowSizeClassifier <= require(4139) /* useWindowSizeClassifier */.WindowSizeClassifier.SMALL;
};
export const useIsWindowSmall = function useIsWindowSmall() {
  return importDefault(4139)() <= require(4139) /* useWindowSizeClassifier */.WindowSizeClassifier.SMALL;
};
