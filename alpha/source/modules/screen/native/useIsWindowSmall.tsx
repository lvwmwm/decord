// Module ID: 7493
// Function ID: 7494
// Name: useIsWindowSmall
// Dependencies: [4696, 2]
// Exports: default, useIsWindowSmall

// Module 7493 (useIsWindowSmall)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4696 */;
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
