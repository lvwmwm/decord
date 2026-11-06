// Module ID: 7208
// Function ID: 7209
// Name: useIsWindowLarge
// Dependencies: [5348, 2]
// Exports: default, getIsWindowLarge

// Module 7208 (useIsWindowLarge)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 5348 */;
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
