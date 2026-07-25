// Module ID: 9071
// Function ID: 71383
// Name: getIsWindowSmall
// Dependencies: [3986, 2]
// Exports: default, useIsWindowSmall

// Module 9071 (getIsWindowSmall)
const result = require("set").fileFinishedImporting("modules/screen/native/useIsWindowSmall.tsx");

export default function getIsWindowSmall() {
  const windowSizeClassifier = require(3986) /* calculateFromWidth */.getWindowSizeClassifier();
  return windowSizeClassifier <= require(3986) /* calculateFromWidth */.WindowSizeClassifier.SMALL;
};
export const useIsWindowSmall = function useIsWindowSmall() {
  return importDefault(3986)() <= require(3986) /* calculateFromWidth */.WindowSizeClassifier.SMALL;
};
