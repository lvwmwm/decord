// Module ID: 8416
// Function ID: 8417
// Name: getIsWindowSmall
// Dependencies: [4162, 2]
// Exports: default, useIsWindowSmall

// Module 8416 (getIsWindowSmall)
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowSmall.tsx");

export default function getIsWindowSmall() {
  const windowSizeClassifier = require(4162) /* useWindowSizeClassifier */.getWindowSizeClassifier();
  return windowSizeClassifier <= require(4162) /* useWindowSizeClassifier */.WindowSizeClassifier.SMALL;
};
export const useIsWindowSmall = function useIsWindowSmall() {
  return importDefault(4162)() <= require(4162) /* useWindowSizeClassifier */.WindowSizeClassifier.SMALL;
};
