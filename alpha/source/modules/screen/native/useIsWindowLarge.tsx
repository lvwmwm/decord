// Module ID: 7253
// Function ID: 7254
// Name: useIsWindowLarge
// Dependencies: [4974, 2]
// Exports: default, getIsWindowLarge

// Module 7253 (useIsWindowLarge)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4974 */;
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
