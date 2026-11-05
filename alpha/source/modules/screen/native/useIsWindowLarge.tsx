// Module ID: 7261
// Function ID: 7262
// Name: useIsWindowLarge
// Dependencies: [5328, 2]
// Exports: default, getIsWindowLarge

// Module 7261 (useIsWindowLarge)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 5328 */;
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
