// Module ID: 7591
// Function ID: 7592
// Name: getIsWindowSmall
// Dependencies: [4304, 2]
// Exports: default, useIsWindowSmall

// Module 7591 (getIsWindowSmall)
import set from "set" /* 2 */;
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4304 */;
import useWindowSizeClassifierDefault from "useWindowSizeClassifier" /* 4304 */;

const result = set.fileFinishedImporting("modules/screen/native/useIsWindowSmall.tsx");

export default function getIsWindowSmall() {
  const windowSizeClassifier = useWindowSizeClassifier.getWindowSizeClassifier();
  return windowSizeClassifier <= useWindowSizeClassifier.WindowSizeClassifier.SMALL;
};
export const useIsWindowSmall = function useIsWindowSmall() {
  return useWindowSizeClassifierDefault() <= useWindowSizeClassifier.WindowSizeClassifier.SMALL;
};
