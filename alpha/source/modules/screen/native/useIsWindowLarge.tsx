// Module ID: 7258
// Function ID: 7259
// Name: useIsWindowLarge
// Dependencies: [5326, 2]
// Exports: default, getIsWindowLarge

// Module 7258 (useIsWindowLarge)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 5326 */;
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
