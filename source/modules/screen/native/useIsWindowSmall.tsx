// Module ID: 8350
// Function ID: 8351
// Name: getIsWindowSmall
// Dependencies: [4156, 2]
// Exports: default, useIsWindowSmall

// Module 8350 (getIsWindowSmall)
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowSmall.tsx");

export default function getIsWindowSmall() {
  const windowSizeClassifier = require(4156) /* useWindowSizeClassifier */.getWindowSizeClassifier();
  return windowSizeClassifier <= require(4156) /* useWindowSizeClassifier */.WindowSizeClassifier.SMALL;
};
export const useIsWindowSmall = function useIsWindowSmall() {
  return importDefault(4156)() <= require(4156) /* useWindowSizeClassifier */.WindowSizeClassifier.SMALL;
};
