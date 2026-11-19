// Module ID: 8507
// Function ID: 8508
// Name: useIsWindowSmall
// Dependencies: [4972, 2]
// Exports: default, useIsWindowSmall

// Module 8507 (useIsWindowSmall)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4972 */;
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
