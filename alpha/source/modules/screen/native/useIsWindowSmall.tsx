// Module ID: 9127
// Function ID: 9128
// Name: useIsWindowSmall
// Dependencies: [5490, 2]
// Exports: default, useIsWindowSmall

// Module 9127 (useIsWindowSmall)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 5490 */;
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
