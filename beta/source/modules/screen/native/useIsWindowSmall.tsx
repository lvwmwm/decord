// Module ID: 9844
// Function ID: 9845
// Name: useIsWindowSmall
// Dependencies: [5202, 2]
// Exports: default, useIsWindowSmall

// Module 9844 (useIsWindowSmall)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 5202 */;
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
