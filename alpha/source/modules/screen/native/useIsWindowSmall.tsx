// Module ID: 8894
// Function ID: 8895
// Name: useIsWindowSmall
// Dependencies: [5097, 2]
// Exports: default, useIsWindowSmall

// Module 8894 (useIsWindowSmall)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 5097 */;
import size from "module_2" /* 2 */;

const useWindowSizeClassifierDefault = useWindowSizeClassifier;

const result = size.fileFinishedImporting("modules/screen/native/useIsWindowSmall.tsx");

export default function getIsWindowSmall() {
  const obj = useWindowSizeClassifier;
  const windowSizeClassifier = obj.getWindowSizeClassifier();
  return windowSizeClassifier <= useWindowSizeClassifier.WindowSizeClassifier.SMALL;
};
export function useIsWindowSmall() {
  const tmp = useWindowSizeClassifierDefault();
  return tmp <= useWindowSizeClassifier.WindowSizeClassifier.SMALL;
}
