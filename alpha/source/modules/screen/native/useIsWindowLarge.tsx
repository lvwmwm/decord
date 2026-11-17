// Module ID: 7781
// Function ID: 7782
// Name: useIsWindowLarge
// Dependencies: [5490, 2]
// Exports: default, getIsWindowLarge

// Module 7781 (useIsWindowLarge)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 5490 */;
import size from "module_2" /* 2 */;

const useWindowSizeClassifierDefault = useWindowSizeClassifier;

const result = size.fileFinishedImporting("modules/screen/native/useIsWindowLarge.tsx");

export default function useIsWindowLarge() {
  const tmp = useWindowSizeClassifierDefault();
  return tmp >= useWindowSizeClassifier.WindowSizeClassifier.LARGE;
};
export function getIsWindowLarge() {
  const obj = useWindowSizeClassifier;
  const windowSizeClassifier = obj.getWindowSizeClassifier();
  return windowSizeClassifier >= useWindowSizeClassifier.WindowSizeClassifier.LARGE;
}
