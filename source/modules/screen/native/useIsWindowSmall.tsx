// Module ID: 9148
// Function ID: 9149
// Name: getIsWindowSmall
// Dependencies: [4048, 2]
// Exports: default, useIsWindowSmall

// Module 9148 (getIsWindowSmall)
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowSmall.tsx");

export default function getIsWindowSmall() {
  const windowSizeClassifier = require(4048) /* useWindowSizeClassifier */.getWindowSizeClassifier();
  return windowSizeClassifier <= require(4048) /* useWindowSizeClassifier */.WindowSizeClassifier.SMALL;
};
export const useIsWindowSmall = function useIsWindowSmall() {
  return importDefault(4048)() <= require(4048) /* useWindowSizeClassifier */.WindowSizeClassifier.SMALL;
};
