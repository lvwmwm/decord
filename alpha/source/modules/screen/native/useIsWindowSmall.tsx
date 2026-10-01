// Module ID: 7501
// Function ID: 7502
// Name: useIsWindowSmall
// Dependencies: [4725, 2]
// Exports: default, useIsWindowSmall

// Module 7501 (useIsWindowSmall)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4725 */;
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
