// Module ID: 7238
// Function ID: 7239
// Name: useIsWindowLarge
// Dependencies: [5325, 2]
// Exports: default, getIsWindowLarge

// Module 7238 (useIsWindowLarge)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 5325 */;
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
