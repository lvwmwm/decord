// Module ID: 8146
// Function ID: 8147
// Name: useIsWindowSmall
// Dependencies: [4617, 2]
// Exports: default, useIsWindowSmall

// Module 8146 (useIsWindowSmall)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4617 */;
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
