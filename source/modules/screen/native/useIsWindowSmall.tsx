// Module ID: 8567
// Function ID: 8568
// Name: getIsWindowSmall
// Dependencies: [4238, 2]
// Exports: default, useIsWindowSmall

// Module 8567 (getIsWindowSmall)
import set from "set" /* 2 */;
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4238 */;
import useWindowSizeClassifierDefault from "useWindowSizeClassifier" /* 4238 */;

const result = set.fileFinishedImporting("modules/screen/native/useIsWindowSmall.tsx");

export default function getIsWindowSmall() {
  const windowSizeClassifier = useWindowSizeClassifier.getWindowSizeClassifier();
  return windowSizeClassifier <= useWindowSizeClassifier.WindowSizeClassifier.SMALL;
};
export const useIsWindowSmall = function useIsWindowSmall() {
  return useWindowSizeClassifierDefault() <= useWindowSizeClassifier.WindowSizeClassifier.SMALL;
};
