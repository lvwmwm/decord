// Module ID: 8006
// Function ID: 8007
// Name: useIsWindowSmall
// Dependencies: [4498, 2]
// Exports: default, useIsWindowSmall

// Module 8006 (useIsWindowSmall)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4498 */;
import size from "module_2" /* 2 */;

const useWindowSizeClassifierDefault = useWindowSizeClassifier;

const result = size.fileFinishedImporting("modules/screen/native/useIsWindowSmall.tsx");

export default function getIsWindowSmall() {
  const windowSizeClassifier = useWindowSizeClassifier.getWindowSizeClassifier();
  return windowSizeClassifier <= useWindowSizeClassifier.WindowSizeClassifier.SMALL;
};
export const useIsWindowSmall = function useIsWindowSmall() {
  return useWindowSizeClassifierDefault() <= useWindowSizeClassifier.WindowSizeClassifier.SMALL;
};
