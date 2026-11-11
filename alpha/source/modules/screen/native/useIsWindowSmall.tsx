// Module ID: 9050
// Function ID: 9051
// Name: useIsWindowSmall
// Dependencies: [5433, 2]
// Exports: default, useIsWindowSmall

// Module 9050 (useIsWindowSmall)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 5433 */;
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
